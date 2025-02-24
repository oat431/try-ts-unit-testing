import { Module } from '@nestjs/common';
import { HealthCheckController } from './controller/health-check.controller';
import { HealthCheckService } from './service/health-check.service';

@Module({
    controllers: [HealthCheckController],
    providers: [HealthCheckService],
    exports: [],
})
export class HealthCheckModule { }
