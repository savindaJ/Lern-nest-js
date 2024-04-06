import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerService } from './service/customer.service';
import { CustomerController } from './controllers/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './scheema/customer.scheema';
import { ItemSchema } from './scheema/item.schema';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './service/item.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jayasekarasavinda44:LAn9leT0PobHA29Y@training1.6uhan9j.mongodb.net/?retryWrites=true&w=majority&appName=training1'),
  MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema },{ name: 'Item', schema: ItemSchema }]),
],
  controllers: [AppController,CustomerController,ItemController],
  providers: [AppService, CustomerService,ItemService],
  exports: [MongooseModule],
})
export class AppModule {}
