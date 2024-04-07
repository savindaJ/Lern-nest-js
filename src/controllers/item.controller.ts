import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ItemDto } from 'src/dtos/item.dto';
import { ItemService } from 'src/service/item.service';
@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getItem():Promise<ItemDto[]> {
    return this.itemService.getAll();
  }

  // findOne(@Param('id') id: string):  ClassName_singularDto {
  @Get(':id')
  getClassName_singular(@Param('id') id: string) {
    return this.itemService.getById(id);
  }

  @Post()
  createClassName_singular(@Body() dto: ItemDto) {
    return this.itemService.create(dto);
  }

  @Put()
  updateClassName_singular(@Body() dto: ItemDto) {
    return this.itemService.update(dto);
  }

  /**
    * Delete className_singular
    * @param id
    * http://localhost:8080/item/ITM-002
    */
  @Delete(':_id')
  deleteClassName_singular(@Param('_id') id: string) {
    console.log(id);
    return this.itemService.delete(id);
  }

  @Get('/get/ids')
  getClassName_singularIds() : Promise<string[]> {
    return this.itemService.getAllItemIds();
  }
}
