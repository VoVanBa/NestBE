import { Test, TestingModule } from '@nestjs/testing';
import { CompanisService } from './companis.service';

describe('CompanisService', () => {
  let service: CompanisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanisService],
    }).compile();

    service = module.get<CompanisService>(CompanisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
