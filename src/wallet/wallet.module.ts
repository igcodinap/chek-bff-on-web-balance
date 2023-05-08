import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { HttpModule } from '@nestjs/axios';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [HttpModule],
  providers: [WalletService, JwtStrategy],
  controllers: [WalletController],
})
export class WalletModule {}
