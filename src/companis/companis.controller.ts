import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanisService } from './companis.service';
import { CreateCompaniDto } from './dto/create-compani.dto';
import { UpdateCompaniDto } from './dto/update-compani.dto';

@Controller('companis')
export class CompanisController {
  constructor(private readonly companisService: CompanisService) {}

  @Post()
  create(@Body() createCompaniDto: CreateCompaniDto) {
    return this.companisService.create(createCompaniDto);
  }

  @Get()
  findAll() {
    return this.companisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompaniDto: UpdateCompaniDto) {
    return this.companisService.update(+id, updateCompaniDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companisService.remove(+id);
  }
}
