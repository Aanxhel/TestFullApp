import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./modules/components/home-view/home-view.module').then(m => m.HomeViewModule) },

  { path: 'login', loadChildren: () => import('./modules/components/login/login.module').then(m => m.LoginModule) },
  { path: 'notfound', loadChildren: () => import('./modules/components/not-found/not-found.module').then(m => m.NotFoundModule) },

  //se coloca siempre al finalr para encontrar el path home
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', pathMatch: 'full', redirectTo: 'login' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
