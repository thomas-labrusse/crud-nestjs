import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('signup')
  async create(@Body() body: CreateUserDto) {
    const { email, password } = body;
    const user = await this.authService.signup(email, password);
    console.log('USER:', user);
    return user;
  }

  // Userguards triggers our localAuthGuard letting know Passport that we use the local strategy, then runs the strategy and eventually runs the validate() function. Passport saves the user in request.user
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // Here, passport attached the user object to the request
    console.log('Req.user:', req.user);
    return this.authService.login(req.user);
  }
}
