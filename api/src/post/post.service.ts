import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';

import { Post } from './entities/post.entity';
// import { url_slug } from 'cyrillic-slug';
import { Repository } from 'typeorm';
import { SearchPostDto } from './dto/search-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private repository: Repository<Post>) {}
  async create(dto: CreatePostDto) {
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

  async search(dto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder('s');
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);

    qb.setParameters({
      title: `%${dto.title}%`,
      views: dto.views || 'DESC',
      body: `%${dto.body}%`,
      tag: `%${dto.tag}%`,
    });

    if (dto.views) qb.orderBy('views', dto.views);
    if (dto.title) qb.andWhere(`s.title ILIKE :title`);
    if (dto.body) qb.andWhere(`s.body ILIKE :body`);
    if (dto.tag) qb.andWhere(`s.tags ILIKE :tag`);

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

  async findOne(id: any) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого поста не существует');
    const qb = this.repository.createQueryBuilder('posts');
    qb.whereInIds(id)
      .update()
      .set({
        views: () => 'views + 1',
      })
      .execute();

    return post;
  }

  async findOneBySlug(slug: string) {
    const post = await this.repository.findOneBy({ slug });
    if (!post) throw new NotFoundException('Такого поста не существует');
    return post;
  }

  async update(id: any, dto) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого поста не существует');

    return await this.repository.update(id, dto);
  }

  async remove(id: number) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого поста не существует');
    return this.repository.delete(id);
  }
}
