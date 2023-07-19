import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { CreateRegistrationDto } from '../dto/create-authentication.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dto/login-request.dto';
import { CurrentUser } from 'src/common/users/current-user';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('authentication')
@ApiTags('Authentication Controller')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post('registration')
  registration(@Body() createAuthenticationDto: CreateRegistrationDto) {
    return this.authenticationService.registration(createAuthenticationDto);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authenticationService.login(body);
  }
}
