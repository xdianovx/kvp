import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private repository: Repository<Comment>,
  ) {}

  async create(dto: CreateCommentDto) {
    return this.repository.save({
      body: dto.body,
      post: { id: dto.postId },
      user: { id: 1 },
    });
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: any) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого комментария не существует');
    return post;
  }

  async update(id: any, dto) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого комментария не существует');

    return await this.repository.update(id, dto);
  }

  async remove(id: number) {
    const post = await this.repository.findOneBy({ id });
    if (!post) throw new NotFoundException('Такого комментария не существует');
    return this.repository.delete(id);
  }
}
