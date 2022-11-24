import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  slug: string;

  @Column({ type: 'jsonb', nullable: true })
  body: any | null;

  @Column({ default: 0 })
  views: number;

  @Column({ nullable: true })
  tags: string;

  @Column({ default: false })
  is_archive: boolean;

  @Column({ nullable: true })
  favorites: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
