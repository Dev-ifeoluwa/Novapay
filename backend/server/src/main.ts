import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for cors to talk to frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  })

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
