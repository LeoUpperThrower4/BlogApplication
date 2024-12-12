import { Provider } from '@angular/core';
import { POST_REPOSITORY } from '../../core/ports/post.repository.port';
import { PostRepository } from '../repositories/post.repository';

export const providers: Provider[] = [
  {
    provide: POST_REPOSITORY,
    useClass: PostRepository
  }
]; 