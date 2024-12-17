import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true, maxlength: 100 })
  name: string;

  @Prop({ required: true })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
