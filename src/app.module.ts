import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, WalletModule, ConfigModule],
})
export class AppModule {}
