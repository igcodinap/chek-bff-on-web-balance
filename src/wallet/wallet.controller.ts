import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('wallet')
export class WalletController {
  walletService: WalletService;
  constructor(service: WalletService) {
    this.walletService = service;
  }

  @UseGuards(JwtAuthGuard)
  @Get('balance')
  async getUserBalance(@Request() req) {
    try {
      const { userId } = req.user;
      const token = req.headers.authorization.split(' ')[1];
      const response = await this.walletService.getBalanceById(userId, token);
      return response;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
