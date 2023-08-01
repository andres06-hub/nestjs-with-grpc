import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'node:path';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger('Main');
const microServiceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, 'proto/app.proto'),
    url: '0.0.0.0:50051',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microServiceOptions,
  );
  logger.log('Path:: ', join(__dirname, 'proto/app.proto'));
  await app.listen();
}

bootstrap();
