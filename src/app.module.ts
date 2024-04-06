import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './service/customer.service';
import { CustomerController } from './controllers/customer.controller';

@Module({
  imports: [],
  controllers: [AppController,CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
