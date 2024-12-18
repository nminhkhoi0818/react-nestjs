import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transactionData) {
    return this.transactionsService.create(transactionData);
  }

  @Get(':accountId')
  findByAccount(@Param('accountId') accountId: string) {
    return this.transactionsService.findByAccount(accountId);
  }
}
