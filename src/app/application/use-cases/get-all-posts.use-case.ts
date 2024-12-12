import { Injectable, Inject } from '@angular/core';
import { Post } from '../../core/domain/post.model';
import { PostRepositoryPort, POST_REPOSITORY } from '../../core/ports/post.repository.port';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostsUseCase {
  constructor(@Inject(POST_REPOSITORY) private readonly postRepository: PostRepositoryPort) { }

  async execute(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();
    console.log("encontrou posts", posts);
    return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
} 