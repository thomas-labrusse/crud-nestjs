import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello() {
    return 'Welcome to the Open Food Fact CRUD, you will find the documentation here : https://github.com/thomas-labrusse/crud-nestjs#readme';
  }
}
