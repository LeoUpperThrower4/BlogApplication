import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
];


