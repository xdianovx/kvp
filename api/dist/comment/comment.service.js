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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_2 = require("typeorm");
let CommentService = class CommentService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        return this.repository.save({
            body: dto.body,
            post: { id: dto.postId },
            user: { id: 1 },
        });
    }
    findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого комментария не существует');
        return post;
    }
    async update(id, dto) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого комментария не существует');
        return await this.repository.update(id, dto);
    }
    async remove(id) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого комментария не существует');
        return this.repository.delete(id);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map