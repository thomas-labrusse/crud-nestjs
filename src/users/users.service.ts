import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      email: 'mockdata@mockdata.com',
      password: 'mockdata',
    },
  ];
  create(id: number, email: string, password: string) {
    const newUser = {
      id: id,
      email: email,
      password: password,
    };
    this.users.push(newUser);
  }
  findOne(id: number) {
    return this.users.filter((user) => user.id === id);
  }
  // TODO: change method when querying a DB to retrieve a unique user
  find(email: string) {
    return this.users.filter((user) => user.email === email);
  }

  findAll() {
    return this.users;
  }
  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return this.users;
  }
  // TODO: update user method
}
