import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Account extends Document {
  @Prop({ required: true })
  account_no: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true, default: 0 })
  balance: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
