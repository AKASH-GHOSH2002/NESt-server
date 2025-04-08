import {
  Body,
  Controller,
  Get,
  Ip,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserRole } from 'src/enum';
//import { AdminSigninDto,  SigninDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto, OtpDto, SigninDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('verify')
  verifyOtp(@Body() dto: OtpDto) {    
    return this.authService.verifyOtp(dto);
  }
  @Post('phone/otp')
  sentOtp(@Body() dto: SigninDto) {
    return this.authService.sentOtp(dto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  

 

  

 
}