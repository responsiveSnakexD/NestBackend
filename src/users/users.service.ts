import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { email: 'admin@example.com', password: 'admin123#', id: 'xD' },
    { email: 'admin2@example.com', password: 'admin321#', id: 'de' },
  ];

  getAll(): User[] {
    return this.users;
  }

  getUserByEmail(paramEmail: string) {
    return this.users.find(({ email }) => email === paramEmail);
  }
}
