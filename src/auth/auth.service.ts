import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user-dto';

@Injectable()
export class AuthService {
  register(registerUserDto: RegisterUserDto) {

    return {
      msg: `ok`,
      user_registered: registerUserDto
    };
  }

  //todo create login user dto
  login() {
    // console.log(createAuthDto);
    return 'This action logs in a user';
  }
}
