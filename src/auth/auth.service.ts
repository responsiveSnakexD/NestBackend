import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  validateUser(email: string, password: string): User | undefined {
    const user = this.usersService.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
  }
}
