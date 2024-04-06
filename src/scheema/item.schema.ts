import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type itemDocument = Item & Document;

@Schema()
export class Item {
    @Prop({ type: String, default: 'CUS-001' })
    id: string;
    @Prop()
    description: string;
    @Prop()
    quantity: number;
    @Prop()
    price: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);