import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(6)
    name: string;

    @IsNumber()
    stock: number;

    @IsString()
    brand: string;

    @IsNumber()
    price: number;

}
