import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get all users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Get a single user based on its id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException(`User with id # ${id} not found`);
    }
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    this.usersService.update(parseInt(id), body);
  }

  // Delete a user based on its id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
