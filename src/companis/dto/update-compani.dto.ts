import { PartialType } from '@nestjs/mapped-types';
import { CreateCompaniDto } from './create-compani.dto';

export class UpdateCompaniDto extends PartialType(CreateCompaniDto) {}
