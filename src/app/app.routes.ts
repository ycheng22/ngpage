import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogLayoutComponent } from './blog/blog-layout/blog-layout.component';
import { AboutLayoutComponent } from './about/about-layout/about-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
  },
  {
    path: 'about',
    component: AboutLayoutComponent,
  },
  {
    path: '',
    redirectTo: '', 
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '', 
    pathMatch: 'full'
  },
  
];
