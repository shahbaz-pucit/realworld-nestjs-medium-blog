import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../../../../users/infrastructure/persistence/relational/entities/user.entity';
import { ArticleEntity } from '../../../../../articles/infrastructure/persistence/relational/entities/article.entity';

@Entity({
  name: 'comment',
})
export class CommentEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'uuid' })
  article_id: string;

  @ApiProperty()
  @Column({ type: 'int' })
  author_id: number;

  @ManyToOne(() => ArticleEntity, (article) => article.comments)
  @JoinColumn({ name: 'article_id' })
  article: ArticleEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  author: UserEntity;

  @ApiProperty()
  @Column({ type: 'text' })
  body: string;

  // @custom-inject-point
  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}