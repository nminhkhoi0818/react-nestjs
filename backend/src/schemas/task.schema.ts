import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true, maxlength: 100 })
  name: string;

  @Prop({ required: true })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
