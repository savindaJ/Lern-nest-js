import { Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/dtos/customer.dto';

@Injectable()
export class CustomerService {
  getAll(): CustomerDto[] {
    return [new CustomerDto('1', 'name', 'address', 1000), new CustomerDto('2', 'name', 'address', 1000)];
  }

  saveCustomer(CustomerDto: CustomerDto): string {
    console.log(CustomerDto);
    return 'hello post';
  }
}