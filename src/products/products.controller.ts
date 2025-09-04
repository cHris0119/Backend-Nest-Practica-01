import { Controller, Get, Post, Body, UseGuards} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  // protect this route -> user must be admin and jwt valid
  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(1)
  create(@Body() createProductDto: CreateProductDto) {

    // return true
    return this.productsService.create(createProductDto);
  }

  // protect this route only with jwt
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }


}
