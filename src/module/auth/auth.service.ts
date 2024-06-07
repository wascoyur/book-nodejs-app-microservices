import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InternalAccountService } from '../../internal/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignInDto } from './dto/sign-in.dto';
import { JwtDto, RefreshJwtDto } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountServiceInternal: InternalAccountService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(params: SignInDto): Promise<JwtDto> {
    const isPasswordCorrect = await this.accountServiceInternal.verify(params);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }

    const users = await this.accountServiceInternal.getUsersByFilter({
      login: params.login,
    });

    const payload = { login: params.login, userId: users.userIds };

    const access = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_ACCESS_EXP'),
    });
    const refresh = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_REFRESH_EXP'),
    });

    return { access, refresh };
  }

  async refreshToken(params: RefreshJwtDto): Promise<JwtDto> {
    let jwtPayload: {
      userId: string;
      login: string;
    };

    try {
      jwtPayload = this.jwtService.verify(params.refresh, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
        algorithms: [this.config.get('JWT_ALG')],
      });
    } catch (error: unknown) {
      throw new UnauthorizedException();
    }

    const { userIds: users } =
      await this.accountServiceInternal.getUsersByFilter({
        userIds: [jwtPayload.userId],
      });
    if (!users.length) {
      throw new NotFoundException('user not found');
    }

    const payload = { login: users[0].login, userId: users[0].userIds };
    const access = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_REFRESH_EXP'),
    });

    const refresh = this.jwtService.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      algorithm: this.config.get('JWT_ALG'),
      expiresIn: this.config.get('JWT_REFRESH_EXP'),
    });

    return { access, refresh };
  }
}
