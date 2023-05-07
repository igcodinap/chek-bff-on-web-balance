import { Controller, Get, HttpException, HttpStatus, Request } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    walletService: WalletService;
    constructor(service: WalletService) {
        this.walletService = service;
    }

    @Get('balance')
    async getUserBalance(@Request() req) {
        try {
            const userid = '1';
            const response = await this.walletService.getBalanceById(userid);
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
}
