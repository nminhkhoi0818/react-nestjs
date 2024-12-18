import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Post()
  create(@Body() accountData: CreateAccountDto) {
    return this.accountService.create(accountData);
  }
}
