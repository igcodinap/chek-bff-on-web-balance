import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WalletService {
  httpService: HttpService;
  constructor(service: HttpService) {
    this.httpService = service;
  }

  async getBalanceById(id: string, token: string) {
    console.log(id, 'id');
    const response = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/wallet/userid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );
    console.log(response, 'response');
    return response.data;
  }
}
