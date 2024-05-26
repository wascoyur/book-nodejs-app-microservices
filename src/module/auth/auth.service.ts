import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InternalAccountService } from '../../internal/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignInDto } from './dto/sign-in.dto';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountServiceInternal: InternalAccountService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}
  async login(params: SignInDto): Promise<JwtDto> {
    const isPasswordCorrect =
      await this.accountServiceInternal.verivication(params);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }
    return new Promise(resolve => {})
  }
}
