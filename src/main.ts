import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const app = await NestFactory.create(AppModule);
  //app.useWebSocketAdapter(new WsAdapter())
  //app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
