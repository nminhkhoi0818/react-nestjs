import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async createTask(name: string): Promise<Task> {
    const newTask = new this.taskModel({ name, isCompleted: false });
    return newTask.save();
  }

  async getTasks(task: string): Promise<Task[]> {
    if (task) {
      return await this.taskModel.find({
        name: { $regex: task, $options: 'i' },
      });
    }

    return await this.taskModel.find();
  }

  async updateTaskStatus(id: string, isCompleted: boolean): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, { isCompleted }).exec();
  }
}
