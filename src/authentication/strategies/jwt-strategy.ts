import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from 'passport-jwt'
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'ALI'){
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,private configService: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: configService.get<string>('JWT_SECRET')
        });
    }

    async validate(payload:JwtPayload){
        const { id } = payload;
        const user = await this.userRepository.createQueryBuilder('u')
        .leftJoinAndSelect('u.roles','r')
        .leftJoinAndSelect('r.permissions','rP')
        .leftJoinAndSelect('u.permissions','uP')
        .where('u.id =:id',{id})
        .getOne();
        return user
    }
}