import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class ProductQueryDto{
@ApiProperty({
    type:Number,
    required:true,
    nullable:false,
})
@IsNumberString()
@IsNotEmpty()
limit:number

@ApiProperty({
    type:Number,
    required:true,
    nullable:false
})
@IsNumberString()
@IsNotEmpty()
skip:number

@ApiProperty({
    type:String,
    required:false,
    nullable:false
})
@IsString()
@IsOptional()
search:string
}