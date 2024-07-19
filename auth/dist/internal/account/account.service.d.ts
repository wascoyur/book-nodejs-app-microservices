import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { GetUsersByFilterParams, GetUsersResponse, VerificationParams } from './account.types';
export declare class InternalAccountService {
    private readonly config;
    private readonly httpService;
    constructor(config: ConfigService, httpService: HttpService);
    verify(params: VerificationParams): Promise<boolean | Error>;
    getUsersByFilter(params: GetUsersByFilterParams): Promise<GetUsersResponse>;
}
