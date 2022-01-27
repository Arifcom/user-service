import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBerhasil() {
    return 'Berhasil! Sekali lagi, alhamdulillah';
  }
}
