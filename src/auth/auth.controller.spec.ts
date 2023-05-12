import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const mockAuthService = {
      login: jest.fn().mockResolvedValue('any'),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should call authService.login with correct information from req.body', async () => {
    const req = {
      body: {
        email: 'user@mail.com',
        password: '123456',
      },
    };
    await authController.login(req);
    expect(authService.login).toHaveBeenCalledWith('user@mail.com', '123456');
  });

  it('should throw an http error when login fails', async () => {
    const req = {
      body: {
        email: 'user@mail.com',
        password: 'wrongpassword',
      },
    };
    const errorMessage = 'Login failed';
    const loginError = new Error(errorMessage);
    (authService.login as jest.Mock).mockRejectedValue(loginError);
    await expect(authController.login(req)).rejects.toThrow(
      new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      ),
    );
  });
});
