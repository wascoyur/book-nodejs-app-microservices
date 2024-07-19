import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import {
  GetUsersByFilterParams,
  GetUsersResponse,
  VerificationParams,
} from './account.types';

@Injectable()
export class InternalAccountService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async verify(params: VerificationParams): Promise<boolean | Error> {
    const url = `${this.config.get(`ACCOUNT_URL`)}/user/verify`;
    console.log(url, 'params---', params);
    try {
      const res = await this.httpService.axiosRef.post(url, { ...params });
      return await res.data;
    } catch (e: unknown) {
      return false;
    }
  }

  async getUsersByFilter(
    params: GetUsersByFilterParams,
  ): Promise<GetUsersResponse> {
    const url = `${this.config.get('ACCOUNT_URL')}/user`;
    const res = await this.httpService.axiosRef.get(url, { params });
    return res.data;
  }
}
