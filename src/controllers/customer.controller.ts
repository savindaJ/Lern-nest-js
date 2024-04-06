import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CustomerDto } from 'src/dtos/customer.dto';
import { Customer } from 'src/scheema/customer.scheema';
import { CustomerService } from 'src/service/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get()
  getHello(): Promise<Customer[]> {
    return this.appService.getAll();
  }

  @Get(':_id')
  getHelloById(@Param('_id') id: string): Promise<Customer> {
    return this.appService.getById(id);
  }

  @Post()
  postHello(@Body() dto:CustomerDto): Promise<CustomerDto> {
    return this.appService.create(dto);
  }

  @Put()
  putHello(@Body() dto:CustomerDto): Promise<CustomerDto> {
    return this.appService.update(dto);
  }

  @Delete(':_id')
  async deleteHello(@Param('_id') id: string): Promise<string> {
    await this.appService.delete(id);
    return Promise.resolve('Deleted');
  }

  @Get('byname')
  getHelloByName(@Query('name') name: string): Promise<Customer[]> {
    console.log(name);
    return this.appService.getByName(name);
  }
}
