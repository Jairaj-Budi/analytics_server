import { Test, TestingModule } from '@nestjs/testing';
import { LexerService } from './lexer.service';

describe('LexerService', () => {
  let service: LexerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LexerService],
    }).compile();

    service = module.get<LexerService>(LexerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
