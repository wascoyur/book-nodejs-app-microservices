import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './internal/account/account.module';

@Module({
  imports: [AuthModule, AccountModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
