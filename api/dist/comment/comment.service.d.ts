import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentService {
    private repository;
    constructor(repository: Repository<Comment>);
    create(dto: CreateCommentDto): Promise<{
        body: any;
        post: {
            id: number;
        };
        user: {
            id: number;
        };
    } & Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: any): Promise<Comment>;
    update(id: any, dto: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
