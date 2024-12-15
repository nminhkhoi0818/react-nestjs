import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findByUsername(username: string) {
    return this.userModel
      .findOne({
        username,
      })
      .exec();
  }

  async createUser(username: string, password: string) {
    const user = new this.userModel({
      username,
      password,
    });
    return user.save();
  }
}
