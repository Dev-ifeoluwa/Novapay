import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super ({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req?.cookies?.jid || null,
                ExtractJwt.fromAuthHeaderAsBearerToken()
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'secretKey',
        });
    }


    async validate(payload: any) {
        // payload = decoded JWT
        if (!payload.isAdmin) {
        throw new UnauthorizedException('Not an admin');
        }

        // return value gets attached to request.user
        return { userId: payload.sub, email: payload.email, role: 'admin' };

    }    
}