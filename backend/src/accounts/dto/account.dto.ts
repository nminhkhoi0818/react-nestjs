import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  account_no: string;

  @IsNumber()
  @Min(0)
  balance: number;

  @IsUUID()
  user_id: string;
}
