import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpService: HttpService;

  beforeEach(async () => {
    const mockHttpService = {
      post: jest.fn().mockImplementation(() => of({ data: 'any' })),
    };

    const mockConfigService = {
      get: jest.fn().mockReturnValue('http://localhost:3002'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should call httpService.post with correct parameters', async () => {
    const email = 'user@mail.com';
    const password = '123456';
    await authService.login(email, password);
    expect(httpService.post).toHaveBeenCalledWith(
      'http://localhost:3002/auth/login',
      { email, password },
    );
  });

  it('should return the response data', async () => {
    const email = 'user@mail.com';
    const password = '123456';
    const response = await authService.login(email, password);
    expect(response).toEqual('any');
  });
});
