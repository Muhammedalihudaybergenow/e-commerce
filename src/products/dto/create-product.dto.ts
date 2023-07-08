import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty({
        type: String,
        required:true,
        nullable: false
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        nullable: false
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        type: Number,
        required:true,
        nullable: false
    })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({
        type: Number,
        required:false,
        nullable:false
    })
    @IsOptional()
    @IsNumber()
    discount: number;

    @ApiProperty({
        type: Number,
        required:true,
        nullable: false
    })
    @IsNotEmpty()
    @IsNumber()
    brandId:number;

    @ApiProperty({
        type: Number,
        nullable: false,
        required:true
    })
    @IsNotEmpty()
    @IsNumber()
    categoryId:number;
}
