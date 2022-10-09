import { HttpModule } from '@nestjs/axios';
import { Module, CacheModule } from '@nestjs/common';
import { OffapiService } from './offapi.service';
import { OffapiController } from './offapi.controller';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [OffapiController],
  providers: [OffapiService],
})
export class OffapiModule {}
