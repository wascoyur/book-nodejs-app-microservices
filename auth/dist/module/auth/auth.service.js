"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const account_service_1 = require("../../internal/account/account.service");
let AuthService = class AuthService {
    constructor(jwtService, internalAccountService, config) {
        this.jwtService = jwtService;
        this.internalAccountService = internalAccountService;
        this.config = config;
    }
    async login(params) {
        const isPasswordCorrect = await this.internalAccountService.verify(params);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException();
        }
        const users = await this.internalAccountService.getUsersByFilter({
            login: params.login,
        });
        const payload = { login: params.login, userId: users.items[0].userId };
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
    async refreshToken(params) {
        let jwtPayload;
        try {
            jwtPayload = this.jwtService.verify(params.refresh, {
                secret: this.config.get('JWT_REFRESH_SECRET'),
                algorithms: [this.config.get('JWT_ALG')],
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
        const { items: users } = await this.internalAccountService.getUsersByFilter({
            userIds: [jwtPayload.userId],
        });
        if (!users?.length) {
            throw new common_1.NotFoundException('user not found');
        }
        const payload = { login: users[0].login, userId: users[0].userId };
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        account_service_1.InternalAccountService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map