import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, WalletModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
