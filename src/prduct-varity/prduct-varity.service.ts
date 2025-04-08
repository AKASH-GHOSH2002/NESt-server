import { Injectable } from '@nestjs/common';
import { CreatePrductVarityDto } from './dto/create-prduct-varity.dto';
import { UpdatePrductVarityDto } from './dto/update-prduct-varity.dto';

@Injectable()
export class PrductVarityService {
  create(createPrductVarityDto: CreatePrductVarityDto) {
    return 'This action adds a new prductVarity';
  }

  findAll() {
    return `This action returns all prductVarity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prductVarity`;
  }

  update(id: number, updatePrductVarityDto: UpdatePrductVarityDto) {
    return `This action updates a #${id} prductVarity`;
  }

  remove(id: number) {
    return `This action removes a #${id} prductVarity`;
  }
}
