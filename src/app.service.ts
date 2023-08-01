import { Injectable } from '@nestjs/common';
import { DataResponse } from './proto/app';

@Injectable()
export class AppService {
  getHello(): DataResponse {
    return {
      success: true,
      message: 'Secessfully!!',
    };
  }
}
