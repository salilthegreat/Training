import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  user =[
    { userName: 'salil@yahoo.com', password: '1234' },
    { userName: 'raj@yahoo.com', password: '1234' },
    { userName: 'zig@yahoo.com', password: '1234' },
]


  getHello(): any {
    return this.user;
  }
}
