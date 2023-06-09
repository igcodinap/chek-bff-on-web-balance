import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  authService: AuthService;
  constructor(service: AuthService) {
    this.authService = service;
  }

  @Post('login')
  async login(@Request() req) {
    try {
      const { email, password } = req.body;
      const response = await this.authService.login(email, password);
      return { user: response };
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
