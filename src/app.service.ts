import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const qrcode = require('qrcode');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateQRCode() {
    const text = 'https://www.google.com/';
    try {
      return await qrcode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }
  }
}
