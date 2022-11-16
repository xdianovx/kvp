import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(dto: CreatePostDto): Promise<CreatePostDto & import("./entities/post.entity").Post>;
    findAll(): Promise<import("./entities/post.entity").Post[]>;
    findNew(): Promise<{
        posts: import("./entities/post.entity").Post[];
        count: number;
    }>;
    SearchPost(dto: SearchPostDto): Promise<{
        posts: import("./entities/post.entity").Post[];
        count: number;
    }>;
    findOne(id: string): Promise<import("./entities/post.entity").Post>;
    findOneBySlug(slug: string): Promise<import("./entities/post.entity").Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
