import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return this.generateToken(user._id.toString(), user.username);
  }

  async registerUser(username: string, password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);

    await this.usersService.createUser(username, hashedPassword);
  }

  private generateToken(userId: string, username: string): string {
    return sign({ userId, username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }
}
