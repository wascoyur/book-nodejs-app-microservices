import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), DatabaseModule],
})
export class AppModule {}
