import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WalletService {
  private httpService: HttpService;
  private walletServiceUrl: string;

  constructor(service: HttpService, configService: ConfigService) {
    this.httpService = service;
    this.walletServiceUrl =
      configService.get('API_WALLET_URL') || 'http://localhost:3001';
  }

  async getBalanceById(id: string, token: string) {
    console.log(id, 'id');
    const response = await firstValueFrom(
      this.httpService.get(`${this.walletServiceUrl}/wallet/userid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );
    console.log(response, 'response');
    return response.data;
  }
}
