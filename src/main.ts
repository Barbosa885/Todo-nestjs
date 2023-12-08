import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // isso vai remover qualquer propriedade que não esteja no DTO
    forbidNonWhitelisted: true, // isso vai retornar um erro caso uma propriedade não esteja no DTO
    transform: true, // isso vai transformar os dados para o tipo especificado no DTO
  })
  )
  await app.listen(3000);
}
bootstrap();
