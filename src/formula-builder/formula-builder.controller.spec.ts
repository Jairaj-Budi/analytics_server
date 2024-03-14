import { Test, TestingModule } from '@nestjs/testing';
import { FormulaBuilderController } from './formula-builder.controller';

describe('FormulaBuilderController', () => {
  let controller: FormulaBuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulaBuilderController],
    }).compile();

    controller = module.get<FormulaBuilderController>(FormulaBuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
