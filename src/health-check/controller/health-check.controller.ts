import { Controller, Get } from '@nestjs/common';
import { ResponseDto } from 'src/common/payload/response.dto';
import { HealthCheckDto } from '../dto/health-check.dto';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@ApiTags('HealthCheck API')
@Controller('health-check')
export class HealthCheckController {
    constructor(
        private readonly healthCheckService: HealthCheckService,
        private readonly http: HttpHealthIndicator,
    ) { }

    @Get()
    @HealthCheck()
    check() {
        return this.healthCheckService.check([
            () => this.http.pingCheck('nestjs-doc', 'https://docs.nestjs.com'),
        ]);
    }
}
