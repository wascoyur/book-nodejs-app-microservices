import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({})
export class AuthModule {
  imports: [ConfigModule];
}
