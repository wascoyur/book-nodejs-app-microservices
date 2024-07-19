import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtDto, RefreshJwtDto } from './dto/jwt.dto';
import { SignInDto } from './dto/sign-in.dto';
import { InternalAccountService } from 'src/internal/account/account.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly internalAccountService;
    private readonly config;
    constructor(jwtService: JwtService, internalAccountService: InternalAccountService, config: ConfigService);
    login(params: SignInDto): Promise<JwtDto>;
    refreshToken(params: RefreshJwtDto): Promise<JwtDto>;
}
