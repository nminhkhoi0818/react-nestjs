import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class TransactionDto {
  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;

  @IsNumber()
  @Min(1)
  @Max(1000000)
  amount: number;
}
