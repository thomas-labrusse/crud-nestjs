import { PartialType } from '@nestjs/mapped-types';
import { CreateOffapiDto } from './create-offapi.dto';

export class UpdateOffapiDto extends PartialType(CreateOffapiDto) {}
