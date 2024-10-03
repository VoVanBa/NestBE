import { Module } from '@nestjs/common';
import { CompanisService } from './companis.service';
import { CompanisController } from './companis.controller';

@Module({
  controllers: [CompanisController],
  providers: [CompanisService],
})
export class CompanisModule {}
