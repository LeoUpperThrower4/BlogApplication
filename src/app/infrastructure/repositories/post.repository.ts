import { Injectable } from '@angular/core';
import { Post } from '../../core/domain/post.model';
import { PostRepositoryPort } from '../../core/ports/post.repository.port';

@Injectable({
  providedIn: 'root'
})
export class PostRepository implements PostRepositoryPort {
  private readonly mockPosts: Post[] = [
    {
      id: 1,
      title: 'Primeiro Post',
      content: 'Este é o conteúdo do primeiro post mockado',
      author: 'João Silva',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Segundo Post',
      content: 'Este é o conteúdo do segundo post mockado',
      author: 'Maria Santos',
      createdAt: new Date()
    }
  ];

  constructor() { }

  async findAll(): Promise<Post[]> {
    return Promise.resolve(this.mockPosts);
  }

  async findById(id: number): Promise<Post | null> {
    const post = this.mockPosts.find(p => p.id === id);
    return Promise.resolve(post || null);
  }

  async save(post: Post): Promise<Post> {
    const newPost = {
      ...post,
      id: this.mockPosts.length + 1,
      createdAt: new Date()
    };
    this.mockPosts.push(newPost);
    return Promise.resolve(newPost);
  }

  async update(id: number, post: Post): Promise<Post> {
    const index = this.mockPosts.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Post não encontrado');
    }
    const updatedPost = { ...post, id };
    this.mockPosts[index] = updatedPost;
    return Promise.resolve(updatedPost);
  }

  async delete(id: number): Promise<void> {
    const index = this.mockPosts.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Post não encontrado');
    }
    this.mockPosts.splice(index, 1);
    return Promise.resolve();
  }
} 