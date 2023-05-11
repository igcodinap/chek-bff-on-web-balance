import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
