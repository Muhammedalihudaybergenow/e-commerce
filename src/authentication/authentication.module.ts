import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secretOrPrivateKey: 'jwt-secret',
      signOptions:{
        expiresIn: '1h'
      }
    })
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,JwtService,JwtStrategy]
})
export class AuthenticationModule {}
