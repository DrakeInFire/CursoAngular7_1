import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas/personas.component';
import { AuthGuard, RegisterUserComponent } from './security';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog/blog.component';
import {  TarjetasAddComponent, TarjetasListComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'personas', children: [
    { path: '', component: PersonasListComponent},
    { path: 'add', component: PersonasAddComponent, canActivate: [AuthGuard]},
    { path: ':id/edit', component: PersonasEditComponent, canActivate: [AuthGuard]},
    { path: ':id', children: [
      { path: '', component: PersonasViewComponent},
      { path: '**', component: PersonasViewComponent},
    ]},
  ]},
  { path: 'tarjetas', children:[
      { path: 'list', component: TarjetasListComponent},
      { path: 'add', component: TarjetasAddComponent}
    ]
  },
  { path: 'blog', children: [
    { path: '', component: BlogListComponent },
    { path: 'add', component: BlogAddComponent},
    { path: ':id/edit', component: BlogEditComponent},
    { path: ':id', component: BlogViewComponent},
    { path: ':id/:kk', component: BlogViewComponent},
  ]},
  { path: 'dinamico', component: DinamicoComponent},
  { path: 'registro', component: RegisterUserComponent},
  { path: 'config', loadChildren: './config/config.module#ConfigModule' },
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
