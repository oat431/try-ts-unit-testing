import { Test, TestingModule } from '@nestjs/testing';
import { MathsampleController } from './mathsample.controller';

describe('MathsampleController', () => {
  let controller: MathsampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathsampleController],
    }).compile();

    controller = module.get<MathsampleController>(MathsampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
