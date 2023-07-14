import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from 'passport-jwt'
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'a'){
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: 'jwt-secret'
        });
    }

    async validate(payload:JwtPayload){
        console.log(payload)
        const { id } = payload;
        const user = await this.userRepository.findOneBy({
            id
        })
        return user
    }
}