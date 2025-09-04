import { Controller, Post, Body, Get } from '@nestjs/common';




import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user-dto';
import { LoginUserDto } from './dto/login-user-dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}


  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
  
    return this.authService.register(registerUserDto);

  }

  //todo create login user dto
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('allUsers')
  getAllUsers() {

    return this.authService.getAllUsers()

  }


}
