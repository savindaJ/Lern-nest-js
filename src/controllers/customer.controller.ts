import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerDto } from 'src/dtos/customer.dto';
import { CustomerService } from 'src/service/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get()
  getHello(): CustomerDto[] {
    return this.appService.getAll();
  }

  @Post()
  postHello(@Body() dto:CustomerDto): string {
    return this.appService.saveCustomer(dto);
  }
}
