import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageContainer } from './page/home.container';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
