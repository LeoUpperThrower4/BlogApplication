import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../core/domain/post.model';
import { GetPostUseCase } from '../application/use-cases/get-post.use-case';
import { GetAllPostsUseCase } from '../application/use-cases/get-all-posts.use-case';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post | null = null;
  relatedPosts: Post[] = [];
  error: string | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private getPostUseCase: GetPostUseCase,
    private getAllPostsUseCase: GetAllPostsUseCase
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      await this.loadPost(Number(params['id']));
    });
  }

  private async loadPost(id: number) {
    this.loading = true;
    this.error = null;

    try {
      this.post = await this.getPostUseCase.execute(id);
      if (this.post) {
        await this.loadRelatedPosts(id);
      }
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Erro ao carregar o post';
      console.error('Erro:', error);
    } finally {
      this.loading = false;
    }
  }

  private async loadRelatedPosts(currentPostId: number) {
    try {
      const allPosts = await this.getAllPostsUseCase.execute();
      this.relatedPosts = allPosts
        .filter(post => post.id !== currentPostId)
        .slice(0, 3);
    } catch (error) {
      console.error('Erro ao carregar posts relacionados:', error);
      this.relatedPosts = [];
    }
  }
}

