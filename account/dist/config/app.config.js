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
exports.ApplicationConfig = void 0;
const class_validator_1 = require("class-validator");
const configurations_enums_1 = require("./types/configurations.enums");
class ApplicationConfig {
}
exports.ApplicationConfig = ApplicationConfig;
__decorate([
    (0, class_validator_1.IsEnum)(configurations_enums_1.Enviroment, { always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "NODE_ENV", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "SERVICE_NAME", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "HTTP_HOST", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "HTTP_PORT", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "HTTP_PREFIX", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    __metadata("design:type", String)
], ApplicationConfig.prototype, "HTTP_VERSION", void 0);
//# sourceMappingURL=app.config.js.map