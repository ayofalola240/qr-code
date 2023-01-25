import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/qr_code')
  async generateQRcode(@Res() res: any) {
    const qrCode = await this.appService.generateQRCode();
    res.render('scan', {
      qr_code: qrCode,
    });
  }
}
