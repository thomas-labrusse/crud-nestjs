import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OffapiService } from './offapi.service';
import { OffapiController } from './offapi.controller';

@Module({
  imports: [HttpModule],
  controllers: [OffapiController],
  providers: [OffapiService],
})
export class OffapiModule {}
