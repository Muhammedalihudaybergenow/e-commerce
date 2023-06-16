import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document =SwaggerModule.createDocument(app,SwaggerConfig.config())
  SwaggerModule.setup('docs/swagger',app,document)
  app.useGlobalPipes(new ValidationPipe({
    always:true,
    forbidUnknownValues:true,
    whitelist:true,
    transform:true,
  }))
  await app.listen(3000);
}
bootstrap();
