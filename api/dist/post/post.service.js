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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
const typeorm_2 = require("typeorm");
let PostService = class PostService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        const slug = dto.title;
        console.log(slug);
        return this.repository.save(dto);
    }
    async findAll() {
        return this.repository.find({
            order: {
                created_at: 'DESC',
            },
        });
    }
    async search(dto) {
        const qb = this.repository.createQueryBuilder('s');
        qb.limit(dto.limit || 0);
        qb.take(dto.take || 10);
        qb.setParameters({
            title: `%${dto.title}%`,
            views: dto.views || 'DESC',
            body: `%${dto.body}%`,
            tag: `%${dto.tag}%`,
        });
        if (dto.views)
            qb.orderBy('views', dto.views);
        if (dto.title)
            qb.andWhere(`s.title ILIKE :title`);
        if (dto.body)
            qb.andWhere(`s.body ILIKE :body`);
        if (dto.tag)
            qb.andWhere(`s.tags ILIKE :tag`);
        const [posts, count] = await qb.getManyAndCount();
        return { posts, count };
    }
    async findByPopular() {
        const qb = this.repository.createQueryBuilder('order');
        qb.orderBy('views', 'DESC');
        qb.limit(2);
        const [posts, count] = await qb.getManyAndCount();
        return {
            posts,
            count,
        };
    }
    async findOne(id) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого поста не существует');
        const qb = this.repository.createQueryBuilder('posts');
        qb.whereInIds(id)
            .update()
            .set({
            views: () => 'views + 1',
        })
            .execute();
        return post;
    }
    async findOneBySlug(slug) {
        const post = await this.repository.findOneBy({ slug });
        if (!post)
            throw new common_1.NotFoundException('Такого поста не существует');
        return post;
    }
    async update(id, dto) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого поста не существует');
        return await this.repository.update(id, dto);
    }
    async remove(id) {
        const post = await this.repository.findOneBy({ id });
        if (!post)
            throw new common_1.NotFoundException('Такого поста не существует');
        return this.repository.delete(id);
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map