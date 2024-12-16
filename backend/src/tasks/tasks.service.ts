import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async createTask(name: string): Promise<Task> {
    const newTask = new this.taskModel({ name, isCompleted: false });
    return newTask.save();
  }

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async updateTaskStatus(id: string, isCompleted: boolean): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, { isCompleted }).exec();
  }
}
