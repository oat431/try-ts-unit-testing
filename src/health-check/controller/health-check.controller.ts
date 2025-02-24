import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '../service/health-check.service';
import { ResponseDto } from 'src/common/payload/response.dto';
import { HealthCheckDto } from '../dto/health-check.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('HealthCheck API')
@Controller('health-check')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) { }

    @Get()
    getHealthCheck(): ResponseDto<HealthCheckDto> {
        return {
            data: this.healthCheckService.getHealthCheck(),
            message: 'Health check is ok',
            statusCode: 200,
        };
    }
}
