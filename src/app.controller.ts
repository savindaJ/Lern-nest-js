import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello() {
    const s = randomUUID();
    console.log(s);
    return { nextId: s };
  }
}
