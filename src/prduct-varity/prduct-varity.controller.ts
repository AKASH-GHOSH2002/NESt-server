import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrductVarityService } from './prduct-varity.service';
import { CreatePrductVarityDto } from './dto/create-prduct-varity.dto';
import { UpdatePrductVarityDto } from './dto/update-prduct-varity.dto';

@Controller('prduct-varity')
export class PrductVarityController {
  constructor(private readonly prductVarityService: PrductVarityService) {}

 
}
