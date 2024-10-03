import { Injectable } from '@nestjs/common';
import { CreateCompaniDto } from './dto/create-compani.dto';
import { UpdateCompaniDto } from './dto/update-compani.dto';

@Injectable()
export class CompanisService {
  create(createCompaniDto: CreateCompaniDto) {
    return 'This action adds a new compani';
  }

  findAll() {
    return `This action returns all companis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compani`;
  }

  update(id: number, updateCompaniDto: UpdateCompaniDto) {
    return `This action updates a #${id} compani`;
  }

  remove(id: number) {
    return `This action removes a #${id} compani`;
  }
}
