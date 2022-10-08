import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService, // private authService: AuthService,
  ) {}

  //   Signup and create a new user
  // @Post('signup')
  // async create(@Body() body: CreateUserDto) {
  //   const { email, password } = body;
  //   const user = await this.authService.signup(email, password);
  //   return user;
  // }

  // Get all users
  @Get()
  findAll() {
    console.log('this route will get all users');
    return this.usersService.findAll();
  }

  // Get a single user based on it id
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(`this route will get a single user with the id: #${id}`);
    return this.usersService.findOne(parseInt(id));
  }

  // TODO: create a PUT request route

  // Delete a user based on its id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
