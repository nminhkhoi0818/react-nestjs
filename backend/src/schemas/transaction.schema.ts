import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: () => new Date() })
  trans_time: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
