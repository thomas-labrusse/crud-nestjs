import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffapiModule } from './offapi/offapi.module';

@Module({
  imports: [UsersModule, AuthModule, OffapiModule],
  controllers: [AppController],
  providers: [AppService],
})
// Possible to apply only to certain routes, excludes routes, only for some controllers, etc. (very flexible)
export class AppModule {}
