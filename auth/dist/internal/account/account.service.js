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
exports.InternalAccountService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
let InternalAccountService = class InternalAccountService {
    constructor(config, httpService) {
        this.config = config;
        this.httpService = httpService;
    }
    async verify(params) {
        const url = `${this.config.get(`ACCOUNT_URL`)}/user/verify`;
        console.log(url, 'params---', params);
        try {
            const res = await this.httpService.axiosRef.post(url, { ...params });
            return await res.data;
        }
        catch (e) {
            return false;
        }
    }
    async getUsersByFilter(params) {
        const url = `${this.config.get('ACCOUNT_URL')}/user`;
        const res = await this.httpService.axiosRef.get(url, { params });
        return res.data;
    }
};
InternalAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], InternalAccountService);
exports.InternalAccountService = InternalAccountService;
//# sourceMappingURL=account.service.js.map