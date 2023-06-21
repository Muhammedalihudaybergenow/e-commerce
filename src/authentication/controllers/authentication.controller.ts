import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { CreateRegistrationDto } from '../dto/create-authentication.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dto/login-request.dto';

@Controller('authentication')
@ApiTags('Authentication Controller')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('registration')
  registration(@Body() createAuthenticationDto: CreateRegistrationDto) {
    return this.authenticationService.registration(createAuthenticationDto);
  }

  @Post('login')
  login(@Body() body:LoginDto){
    return this.authenticationService.login(body);
  }
}
