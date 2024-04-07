import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDto } from 'src/dtos/customer.dto';
import { Customer } from 'src/scheema/customer.scheema';

@Injectable()
export class CustomerService {

  constructor(@InjectModel(Customer.name) private catModel: Model<Customer>) {
    this.catModel = catModel;
  }

  getAll(): Promise<Customer[]> {
    return this.catModel.find().exec();
  }

  async create(createCatDto: CustomerDto): Promise<Customer> {
    console.log(createCatDto);
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async update(createCatDto: CustomerDto): Promise<Customer> {
      const exitingCustomer = await this.catModel.findOne({id: createCatDto.id});
      exitingCustomer.name = createCatDto.name;
      exitingCustomer.address = createCatDto.address;
      exitingCustomer.salary = createCatDto.salary;
      return exitingCustomer.save();
  }

  async delete(id: string) {
    console.log(id);
    return this.catModel.deleteOne({
      id: id
    }).exec();
  }

  async getById(id: string): Promise<Customer> {
    return this.catModel.findOne
      ({
        id: id
      }).exec();
    }

  async getByName(name: string): Promise<Customer[]> {
    return this.catModel.find
      ({
        name: name
      }).exec();
  }

  async getAllCustomerId(): Promise<string[]> {
    // Find all customers and project only the 'name' field
    const customers = await this.catModel.find({}, 'id').exec();
    console.log(customers);
    // Extract and return only the names
    return customers.map(customer => customer.id);
  }
}