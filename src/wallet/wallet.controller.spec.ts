import { Test, TestingModule } from '@nestjs/testing';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('WalletController', () => {
  let walletController: WalletController;
  let walletService: WalletService;
  let httpService: HttpService;

  beforeEach(async () => {
    const mockHttpService = {
      get: jest.fn().mockImplementation(() => of({ data: 'any' })),
    };

    const mockWalletService = {
      getBalanceById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletController],
      providers: [
        { provide: WalletService, useValue: mockWalletService },
        { provide: HttpService, useValue: mockHttpService },
      ],
    }).compile();

    walletController = module.get<WalletController>(WalletController);
    walletService = module.get<WalletService>(WalletService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should call walletService.getBalanceById with correct parameters', async () => {
    const req = {
      user: {
        userId: 'userTestID',
      },
      headers: {
        authorization: 'Bearer someTestToken',
      },
    };
    await walletController.getUserBalance(req);
    expect(walletService.getBalanceById).toHaveBeenCalledWith(
      'userTestID',
      'someTestToken',
    );
  });

  it('should throw an exception when getBalanceById fails', async () => {
    const req = {
      user: {
        userId: 'userTestID',
      },
      headers: {
        authorization: 'Bearer someTestToken',
      },
    };
    const errorMessage = 'Get balance failed';
    const getBalanceError = new Error(errorMessage);
    (walletService.getBalanceById as jest.Mock).mockRejectedValue(
      getBalanceError,
    );
    await expect(walletController.getUserBalance(req)).rejects.toThrow(
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
