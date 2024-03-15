import { Test, TestingModule } from '@nestjs/testing';
import { NestFeaturesService } from './nest-features.service';

describe('NestFeaturesService', () => {
  let service: NestFeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestFeaturesService],
    }).compile();

    service = module.get<NestFeaturesService>(NestFeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
