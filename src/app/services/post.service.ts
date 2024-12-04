import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Post {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {
  // Dados locais armazenados como uma lista de posts
  private posts: Post[] = [
    { id: '1', title: 'Primeiro Post', content: 'Conteúdo do primeiro post.' },
    { id: '2', title: 'Segundo Post', content: 'Conteúdo do segundo post.' },
    { id: '3', title: 'Terceiro Post', content: 'Conteúdo do terceiro post.' }
  ];

  constructor() { }

  // Método para buscar um post pelo ID
  getPostById(id: string): Observable<Post | undefined> {
    const post = this.posts.find(p => p.id === id);
    return of(post); // Retorna o post encontrado como um Observable
  }

  getAllPosts(): Observable<Post[]> {
    return of(this.posts); // Retorna a lista de posts como um Observable
  }
}
