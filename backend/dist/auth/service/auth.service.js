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
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../user/service/user.service");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
const verifyPassword_1 = require("../../common/util/verifyPassword");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signUp(request) {
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(request.password, salt, 32));
        const result = salt + '.' + hash.toString('hex');
        const user = await this.userService.userCreate(request.email, result, request.username);
        return user;
    }
    async signIn(email, pass) {
        const user = await this.userService.findEmail(email);
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(pass, salt, 32));
        const result = salt + '.' + hash.toString('hex');
        if (!user) {
            throw new common_1.BadRequestException('No one there');
        }
        if (!(0, verifyPassword_1.verifyPassword)(user.password, pass))
            throw new common_1.UnauthorizedException('Password is wrong');
        const payload = { sub: user.id, username: user.username };
        return true;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map