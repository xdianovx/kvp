import { User } from 'src/user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';
export declare class Comment {
    id: number;
    body: string;
    user: User;
    post: Post;
    created_at: Date;
    updated_at: Date;
}
