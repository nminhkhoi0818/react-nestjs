import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/schemas/account.schema';
import { CreateAccountDto } from './dto/account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async findAll() {
    return this.accountModel.find().exec();
  }

  async create(account: CreateAccountDto) {
    const createdAccount = new this.accountModel(account);
    return createdAccount.save();
  }

  async updateBalance(account_no: string, amount: number) {
    return this.accountModel.findOneAndUpdate(
      { account_no },
      { $inc: { balance: amount } },
      { new: true },
    );
  }
}
