import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { SearchPostDto } from './dto/search-post.dto';
export declare class PostService {
    private repository;
    constructor(repository: Repository<Post>);
    create(dto: CreatePostDto): Promise<CreatePostDto & Post>;
    findAll(): Promise<Post[]>;
    search(dto: SearchPostDto): Promise<{
        posts: Post[];
        count: number;
    }>;
    findByPopular(): Promise<{
        posts: Post[];
        count: number;
    }>;
    findOne(id: any): Promise<Post>;
    findOneBySlug(slug: string): Promise<Post>;
    update(id: any, dto: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
