import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import LoginDto from './auth/dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  loginUser(@Body() loginData: LoginDto): void {
    console.log(loginData);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
