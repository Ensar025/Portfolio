import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AboutComponent } from './views/about/about.component';
import { PageDoesNotExistComponent } from './views/page-does-not-exist/page-does-not-exist.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', component: PageDoesNotExistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
