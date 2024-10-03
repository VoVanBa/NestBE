import { Test, TestingModule } from '@nestjs/testing';
import { CompanisController } from './companis.controller';
import { CompanisService } from './companis.service';

describe('CompanisController', () => {
  let controller: CompanisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanisController],
      providers: [CompanisService],
    }).compile();

    controller = module.get<CompanisController>(CompanisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
