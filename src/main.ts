import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [process.env.CLIENT_ORIGIN, process.env.CLIENT_ORIGIN_2],
    credentials: true,
  });

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on PORT ${process.env.PORT}.`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
