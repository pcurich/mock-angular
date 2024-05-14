import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContainer } from './page/page.container';

const routes: Routes = [
  {
    path: '',
    component: PageContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
