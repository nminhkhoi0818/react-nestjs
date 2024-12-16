import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneByEmail(email: string) {
    return this.userModel.findOne({
      email,
    });
  }

  async createUser(email: string, password: string) {
    const user = new this.userModel({
      email,
      password,
    });
    return user.save();
  }

  async getProfile(userId: string) {
    return await this.userModel.findById(userId).select('-password');
  }
}
