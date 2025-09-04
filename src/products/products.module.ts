import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

import { AuthModule } from 'src/auth/auth.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    AuthModule,
    CommonModule
  ],
  providers: [
    ProductsService
  ],
  controllers: [ProductsController],
  exports: [ProductsService]
})
export class ProductsModule {}
