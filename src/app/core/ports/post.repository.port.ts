import { Post } from '../domain/post.model';
import { InjectionToken } from '@angular/core';

export interface PostRepositoryPort {
  findAll(): Promise<Post[]>;
  findById(id: number): Promise<Post | null>;
  save(post: Post): Promise<Post>;
  update(id: number, post: Post): Promise<Post>;
  delete(id: number): Promise<void>;
}

export const POST_REPOSITORY = new InjectionToken<PostRepositoryPort>('PostRepositoryPort'); 