import { IsEmail, IsString, MinLength, Matches } from "class-validator";

export class RegisterUserDto {

  @IsString()
  @MinLength(3)
  fullName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, {
    message: 'password must contain at least one letter, one number, and one special character'
  })
  password: string;


}
