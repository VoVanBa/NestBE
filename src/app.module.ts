import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanisModule } from './companis/companis.module';

@Module({
  imports: [UsersModule, CompanisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
