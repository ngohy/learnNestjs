import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from "express";

const port= process.env.PORT|| 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static("."));
  await app.listen(port);
}
bootstrap();
