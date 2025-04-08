import { PartialType } from '@nestjs/swagger';
import { CreatePrductVarityDto } from './create-prduct-varity.dto';

export class UpdatePrductVarityDto extends PartialType(CreatePrductVarityDto) {}
