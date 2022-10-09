import { HttpModule } from '@nestjs/axios';
import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { OffapiService } from './offapi.service';
import { OffapiController } from './offapi.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [HttpModule, CacheModule.register({ ttl: 60, max: 5 })],
  controllers: [OffapiController],
  providers: [
    OffapiService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class OffapiModule {}
