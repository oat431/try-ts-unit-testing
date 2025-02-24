import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckModule } from './health-check/health-check.module';
import { MathsampleController } from './mathsample/controller/mathsample.controller';
import { MathsampleModule } from './mathsample/mathsample.module';

@Module({
    imports: [ConfigModule.forRoot(), HealthCheckModule, MathsampleModule],
})
export class AppModule { }
