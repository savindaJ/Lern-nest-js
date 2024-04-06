// customer.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from 'src/controllers/customer.controller';
import { Customer, CustomerSchema } from 'src/scheema/customer.scheema';
import { CustomerService } from 'src/service/customer.service';


export class CustomerModule {}
