/**
 * Importações necessárias para configuração das rotas
 */

import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './pages/home/home.component';

/**
 * Configuração das rotas da aplicação
 * @constant routes
 * @type {Routes}
 */
export const routes: Routes = [
  /** Rota raiz que carrega o componente HomeComponent */
  { path: '', component: HomeComponent },

  /** Rota dinâmica para exibir posts específicos através do ID */
  { path: 'post/:id', component: PostComponent },

  /** Rota curinga que redireciona para a página inicial quando nenhuma rota é encontrada */
  { path: '**', redirectTo: '' },
];

