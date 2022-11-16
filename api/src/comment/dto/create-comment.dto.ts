import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  body: any;

  @IsNotEmpty()
  postId?: number;
}
