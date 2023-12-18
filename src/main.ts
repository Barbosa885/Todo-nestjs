import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // isso vai remover qualquer propriedade que não esteja no DTO
    forbidNonWhitelisted: true, // isso vai retornar um erro caso uma propriedade não esteja no DTO
    transform: true, // isso vai transformar os dados para o tipo especificado no DTO
  })
  )

  const config = new DocumentBuilder() 
    .setTitle('Todo Api examples')
    .setDescription('The Todo app API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
