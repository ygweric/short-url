import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppService } from '../../services/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {

    it('should insert url', async () => {
      const shortUrl = 'www.s.cn/a';
      const longUrl = 'www.baidu.com/looooooooooooooogurl';
      jest.spyOn(appService, 'insertUrl')
        .mockImplementation(async (): Promise<string> => Promise.resolve(shortUrl));

      const response = {
        json: (r) => (r),
        status: () => (response)
      };

      const resp = await appController.insertUrl(longUrl, response);
      expect(resp.data).toBe(shortUrl);
      expect(resp.code).toBe(0);
    });


    it('should find url', async () => {
      const shortUrl = 'www.s.cn/a';
      const longUrl = 'www.baidu.com/looooooooooooooogurl';
      jest.spyOn(appService, 'findUrl')
        .mockImplementation(async (): Promise<string> => Promise.resolve(longUrl));

      const response = {
        json: (r) => (r),
        status: () => (response)
      };

      const resp = await appController.findUrl(shortUrl, response);
      expect(resp.data).toBe(longUrl);
      expect(resp.code).toBe(0);
    });


    it('should find nothing', async () => {
      const shortUrl = 'www.s.cn/a';
      jest.spyOn(appService, 'findUrl')
        .mockImplementation(async (): Promise<string> => Promise.resolve(null));

      const response = {
        json: (r) => (r),
        status: () => (response)
      };

      const resp = await appController.findUrl(shortUrl, response);
      expect(resp.code).toBe(100);
    });

    it('should know invalid url', async () => {
      const shortUrl = 'ssss';
      const response = {
        json: (r) => (r),
        status: () => (response)
      };

      const resp = await appController.findUrl(shortUrl, response);
      expect(resp.code).toBe(101);
    });

  });
});
