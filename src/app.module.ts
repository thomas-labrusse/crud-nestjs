import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffapiModule } from './offapi/offapi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import config from '../config/configuration';
import dbConfig from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    UsersModule,
    AuthModule,
    OffapiModule,
    // TypeOrmModule.forRoot(): sharing db connection with all modules
    TypeOrmModule.forRoot(dbConfig),

    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       type: 'sqlite',
    //       database: config.get<string>('db'),
    //       entities: [User],
    //       // synchronize option: only for development purposes. NEVER RUN IN PRODUCTION, CAN DELETE COLUMNS AND DATA, WRITE MIGRATIONS INSTEAD
    //       synchronize: true,
    //     };
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
