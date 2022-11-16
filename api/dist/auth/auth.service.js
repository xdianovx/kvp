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
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const candidate = await this.userService.findOne({
            where: {
                email: dto.email,
            },
        });
        if (candidate)
            throw new common_1.BadRequestException('Данный email уже зарегестрирован в системе');
        const user = await this.userService.create(dto);
        return Object.assign(Object.assign({}, user), { access_token: await this.generateJwt(user) });
    }
    async login(dto) {
        const user = await this.validateUser(dto.email, dto.password);
        return Object.assign(Object.assign({}, user), { access_token: await this.generateJwt(user) });
    }
    async generateJwt(data) {
        const payload = { sub: data.id, email: data.email };
        const access_token = this.jwtService.sign(payload);
        return access_token;
    }
    async validateUser(email, pass) {
        const user = await this.userService.findOne({
            where: {
                email: email,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Неверный логин или пароль');
        if (user.password !== pass)
            throw new common_1.NotFoundException('Неверный логин или пароль');
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map