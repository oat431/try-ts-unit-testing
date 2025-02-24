import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '../service/health-check.service';
import { ResponseDto } from 'src/common/payload/response.dto';
import { HealthCheckDto } from '../dto/health-check.dto';

@Controller('health-check')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) {}

    @Get()
    getHealthCheck(): ResponseDto<HealthCheckDto> {
        return {
            data: this.healthCheckService.getHealthCheck(),
            message: 'Health check is ok',
            statusCode: 200,
        };
    }
}
