import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OffapiService } from './offapi.service';

@Controller('product')
export class OffapiController {
  constructor(private readonly offapiService: OffapiService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':barcode')
  findOne(@Param('barcode') barcode: string) {
    return this.offapiService.findOne(barcode);
  }
}
