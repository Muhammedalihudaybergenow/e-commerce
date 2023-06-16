import { DocumentBuilder } from "@nestjs/swagger";

export class SwaggerConfig{
    static config(){
        return new DocumentBuilder()
        .setTitle('E-Commerce')
        .setDescription('Nestjs E-Commerce API')
        .setVersion('1.0')
        .build();
    }
}