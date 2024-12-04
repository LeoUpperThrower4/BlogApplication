import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Carrega todos os posts
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
