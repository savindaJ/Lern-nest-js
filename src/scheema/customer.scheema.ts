import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop({ type: String, default: 'CUS-001' })
    id: string;
    @Prop()
    name: string;
    @Prop()
    address: string;
    @Prop()
    salary: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);