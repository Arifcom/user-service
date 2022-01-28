import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: process.env.TCP_HOST,
      port: parseInt(process.env.TCP_PORT) || 3000,
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
