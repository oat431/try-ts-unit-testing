import { Controller, Get, Query } from '@nestjs/common';
import { MathsampleService } from '../service/mathsample.service';
import { ResponseDto } from 'src/common/payload/response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mathsample API')
@Controller('mathsample')
export class MathsampleController {
    constructor(
        private readonly mathsampleService: MathsampleService,
    ) { }

    @Get('is-prime')
    checkPrimeNumber(@Query('number') n: number): ResponseDto<Boolean> {
        return {
            data: this.mathsampleService.checkPrimeNumber(n),
            message: 'Prime number check',
            statusCode: 200
        }
    }

    @Get('is-even')
    isEven(@Query('number') n: number): ResponseDto<Boolean> {
        return {
            data: this.mathsampleService.isEven(n),
            message: 'Even number check',
            statusCode: 200
        }
    }


}
