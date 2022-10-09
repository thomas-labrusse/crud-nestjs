import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OffapiService } from './offapi.service';

@Controller('product')
export class OffapiController {
  constructor(private readonly offapiService: OffapiService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(300)
  @Get(':barcode')
  async findOne(@Param('barcode') barcode: string) {
    return this.offapiService.findOne(barcode);
  }
}
