import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { Role, User } from './auth/entities';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { Product } from './products/entities/product.entity';




@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port:  +process.env.DB_PORT!,
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Role, Product],
      synchronize: true,
      logging: true
    }),
    AuthModule, 
    ProductsModule, 
    SeedModule
  ],
})

export class AppModule {
}
