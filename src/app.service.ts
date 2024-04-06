import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello savinda';
  }

  postHello(): string {
    return 'hello post';
  }
}
