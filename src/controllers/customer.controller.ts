import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerDto } from 'src/dtos/customer.dto';
import { CustomerService } from 'src/service/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() dto:CustomerDto): string {
    console.log(dto);
    return this.appService.postHello();
  }
}
