import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './service/customer.service';
import { CustomerController } from './controllers/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './scheema/customer.scheema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jayasekarasavinda44:LAn9leT0PobHA29Y@training1.6uhan9j.mongodb.net/?retryWrites=true&w=majority&appName=training1'),
  MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
],
  controllers: [AppController,CustomerController],
  providers: [AppService, CustomerService],
  exports: [MongooseModule],
})
export class AppModule {}
