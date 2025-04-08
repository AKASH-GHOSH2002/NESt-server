import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrductVarityService } from './prduct-varity.service';
import { CreatePrductVarityDto } from './dto/create-prduct-varity.dto';
import { UpdatePrductVarityDto } from './dto/update-prduct-varity.dto';

@Controller('prduct-varity')
export class PrductVarityController {
  constructor(private readonly prductVarityService: PrductVarityService) {}

  @Post()
  create(@Body() createPrductVarityDto: CreatePrductVarityDto) {
    return this.prductVarityService.create(createPrductVarityDto);
  }

  @Get()
  findAll() {
    return this.prductVarityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prductVarityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrductVarityDto: UpdatePrductVarityDto) {
    return this.prductVarityService.update(+id, updatePrductVarityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prductVarityService.remove(+id);
  }
}
