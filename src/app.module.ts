import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffapiModule } from './offapi/offapi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OffapiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    // TypeOrmModule.forRoot(): sharing db connection with all modules
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          // switching db between dev and test
          database: config.get<string>('DB_NAME'),
          entities: [User],
          // synchronize option: only for development purposes. NEVER RUN IN PRODUCTION, CAN DELETE COLUMNS AND DATA, WRITE MIGRATIONS INSTEAD
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
