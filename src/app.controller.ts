import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // NOTE: TEST FOR PROTECTED ROUTE
  @UseGuards(JwtAuthGuard)
  @Get('test')
  log(@Request() req) {
    console.log('accessing this route content only if logged in');
    return req.user;
  }
}
