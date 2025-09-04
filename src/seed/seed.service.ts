import { Injectable } from '@nestjs/common';

import { ProductsService } from 'src/products/products.service';
import { productsData } from './data/seed-data';
import { Product } from 'src/products/entities/product.entity';
import { CreateProductDto } from 'src/products/dto/create-product.dto';


@Injectable()
export class SeedService {

  constructor(
    private productService: ProductsService
  ){}


  async executeSeed() {
    return await this.deleteAndCreateProducts()
  }

  private async deleteAndCreateProducts() {
    await this.productService.deleteAll()

    const products = productsData

    const insertPromises: Promise<{ msg: string; product: CreateProductDto & Product; }>[] = []

    products.forEach( prod => insertPromises.push(this.productService.create(prod)) )

    await Promise.all(insertPromises)

    return "SEED EXCECUTED"

  }


}
