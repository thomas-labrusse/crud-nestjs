import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffapiModule } from './offapi/offapi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OffapiModule,
    // TypeOrmModule.forRoot(): sharing db connection with all modules
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      // synchronize option: only for development purposes. NEVER RUN IN PRODUCTION, CAN DELETE COLUMNS AND DATA, WRITE MIGRATIONS INSTEAD
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
