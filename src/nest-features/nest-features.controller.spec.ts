import { Test, TestingModule } from '@nestjs/testing';
import { NestFeaturesController } from './nest-features.controller';

describe('NestFeaturesController', () => {
  let controller: NestFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestFeaturesController],
    }).compile();

    controller = module.get<NestFeaturesController>(NestFeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
