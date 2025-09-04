import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    
    const product = await this.productRepository.save(createProductDto)

    return {
      msg: 'ok',
      product
    }
  }

  async findAll() {
    return await this.productRepository.find() 
  }

  async deleteAll() {

    await this.productRepository.deleteAll()

    return
  
  }

}
