import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  service: HttpService;
  contructor(httpService: HttpService) {
    this.service = httpService;
  }

  async login(email: string, password: string) {
    const response = await firstValueFrom(
      this.service.post('http://localhost:3000/auth/login', {
        email,
        password,
      }),
    );
    console.log(response, 'response');
    return response.data;
  }
}
