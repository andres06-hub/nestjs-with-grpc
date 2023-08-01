import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { DataResponse } from './proto/app';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('ProjectGrpc', 'Example')
  example(): DataResponse {
    console.log('Request...');
    return this.appService.getHello();
  }

  @GrpcMethod('ProjectGrpc', 'CreatePdf')
  createPdf(): DataResponse {
    return {
      success: true,
      message: 'Created Pdf!',
    };
  }
}
