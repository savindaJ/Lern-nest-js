import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getHello(): string {
    return 'hello Service';
  }

  postHello(): string {
    return 'hello post';
  }
}