import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';


interface userInterface {
  userName: string,
  password: string,
  role: 'admin' | 'member'
}
@Injectable()
export class LoginService {


  users: userInterface[] = [
    { userName: 'salil@yahoo.com', password: '1234', role: 'admin' },
    { userName: 'bibek@yahoo.com', password: '1234', role: 'member' },
    { userName: 'shubham@yahoo.com', password: '1234', role: 'member' },
  ]

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  checkLogin(createLoginDto: CreateLoginDto) {

    console.log("createtemierngjnef", createLoginDto)

    let authorized = this.users.find((user) => user.userName == createLoginDto.userName && user.password == createLoginDto.password)

    console.log("authorized", authorized)

    if (authorized) {
      return { 
        statusCode:HttpStatus.OK,
        Authorized: true ,
        role:authorized.role}
    }
    else {
      return {
        statusCode:HttpStatus.BAD_REQUEST,
         Authorized: false }
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
