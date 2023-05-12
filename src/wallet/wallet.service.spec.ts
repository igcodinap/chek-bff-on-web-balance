import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';
import { WalletService } from './wallet.service';

describe('WalletService', () => {
  let walletService: WalletService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const mockHttpService = {
      get: jest.fn().mockImplementation(() => of({ data: 'any' })),
    };

    const mockConfigService = {
      get: jest.fn().mockReturnValue('http://localhost:3001'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletService,
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    walletService = module.get<WalletService>(WalletService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should call httpService.get with correct parameters', async () => {
    const userId = 'userTestID';
    const token = 'testUserToken';
    await walletService.getBalanceById(userId, token);
    expect(httpService.get).toHaveBeenCalledWith(
      `http://localhost:3001/wallet/userid/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  });

  it('should return data from httpService.get', async () => {
    const userId = 'userTestID';
    const token = 'testUserToken';
    const response = await walletService.getBalanceById(userId, token);
    expect(response).toEqual('any');
  });
});
