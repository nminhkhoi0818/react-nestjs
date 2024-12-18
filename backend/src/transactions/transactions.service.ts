import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountsService } from 'src/accounts/accounts.service';
import { Transaction } from 'src/schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
    private readonly accountsService: AccountsService,
  ) {}

  async create(transactionData: Partial<Transaction>): Promise<Transaction> {
    const { from, to, amount } = transactionData;

    const sender = await this.accountsService.updateBalance(from, -amount);
    if (sender.balance < 0) {
      throw new BadRequestException('Insufficient balance');
    }

    await this.accountsService.updateBalance(to, amount);

    const transaction = new this.transactionModel(transactionData);
    return transaction.save();
  }

  async findByAccount(accountId: string): Promise<Transaction[]> {
    return this.transactionModel
      .find({ $or: [{ from: accountId }, { to: accountId }] })
      .exec();
  }
}
