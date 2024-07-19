import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtDto, RefreshJwtDto } from './dto/jwt.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: SignInDto): Promise<JwtDto>;
    refreshToken(dto: RefreshJwtDto): Promise<JwtDto>;
}
