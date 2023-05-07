import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WalletService {
  httpService: HttpService;
  constructor(service: HttpService) {
    this.httpService = service;
  }

  async getBalanceById(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`http://localhost:3002/wallet/balance/${id}`),
    );
    console.log(response, 'response');
    return response.data;
  }
}
