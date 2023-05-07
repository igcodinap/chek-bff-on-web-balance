import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  providers: [JwtStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
