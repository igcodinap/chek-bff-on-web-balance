import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private httpService: HttpService;
  private authServiceUrl: string;
  constructor(httpService: HttpService, configService: ConfigService) {
    this.httpService = httpService;
    this.authServiceUrl =
      configService.get('AUTH_SERVICE_URL') || 'http://localhost:3002';
  }

  async login(email: string, password: string) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.authServiceUrl}/auth/login`, {
        email,
        password,
      }),
    );
    console.log(response, 'response');
    return response.data;
  }
}
