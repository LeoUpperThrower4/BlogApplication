import { Injectable, Inject } from '@angular/core';
import { Post } from '../../core/domain/post.model';
import { PostRepositoryPort, POST_REPOSITORY } from '../../core/ports/post.repository.port';

@Injectable({
  providedIn: 'root'
})
export class GetPostUseCase {
  constructor(@Inject(POST_REPOSITORY) private readonly postRepository: PostRepositoryPort) { }

  async execute(id: number): Promise<Post | null> {
    return this.postRepository.findById(id);
  }
} 