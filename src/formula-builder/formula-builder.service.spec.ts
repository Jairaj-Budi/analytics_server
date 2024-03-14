import { Test, TestingModule } from '@nestjs/testing';
import { FormulaBuilderService } from './formula-builder.service';

describe('FormulaBuilderService', () => {
  let service: FormulaBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulaBuilderService],
    }).compile();

    service = module.get<FormulaBuilderService>(FormulaBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
