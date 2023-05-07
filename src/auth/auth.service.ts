import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async login(email: string, password: string) {
    const response = await firstValueFrom(
      this.httpService.post('http://localhost:3002/auth/login', {
        email,
        password,
      }),
    );
    console.log(response, 'response');
    return response.data;
  }
}
