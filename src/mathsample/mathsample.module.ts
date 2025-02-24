import { Module } from '@nestjs/common';
import { MathsampleController } from './controller/mathsample.controller';
import { MathsampleService } from './service/mathsample.service';

@Module({
    controllers: [MathsampleController],
    providers: [MathsampleService],
    exports: [],
})
export class MathsampleModule { }
