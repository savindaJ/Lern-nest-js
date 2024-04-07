import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDto } from 'src/dtos/item.dto';
import { Item } from 'src/scheema/item.schema';

@Injectable()
export class ItemService {

    constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {
        this.itemModel = itemModel;
      }

  getAll(): Promise<ItemDto[]> {
    return this.itemModel.find().exec();
  }

    async create(createItemDto: ItemDto): Promise<Item> {
        console.log(createItemDto);
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }

    async update(createItemDto: ItemDto): Promise<Item> {
        const exitingItem = await this.itemModel.findOne({id: createItemDto.id});
        exitingItem.description = createItemDto.description;
        exitingItem.price = createItemDto.price;
        exitingItem.quantity = createItemDto.quantity;
        return exitingItem.save();
    }

    async delete(id: string) {
        console.log(id);
        return this.itemModel.deleteOne({
            id: id
        }).exec();
    }

    async getById(id: string): Promise<Item> {
        return this.itemModel.findOne
            ({
                id: id
            }).exec();
    }

    async getAllItemIds(): Promise<string[]> {
        // Find all items and project only the 'id' field
        const items = await this.itemModel.find({}, 'id').exec();
        console.log(items);
        // Extract and return only the ids
        return items.map(item => item.id);
    }
}
