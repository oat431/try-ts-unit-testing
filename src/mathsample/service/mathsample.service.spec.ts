import { Test, TestingModule } from '@nestjs/testing';
import { MathsampleService } from './mathsample.service';

describe('MathsampleService', () => {
  let service: MathsampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathsampleService],
    }).compile();

    service = module.get<MathsampleService>(MathsampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
