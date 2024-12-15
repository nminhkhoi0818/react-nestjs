import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body('name') name: string) {
    return this.tasksService.createTask(name);
  }

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Patch(':id/status')
  updateTaskStatus(@Body('status') status: string, @Param('id') id: string) {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
