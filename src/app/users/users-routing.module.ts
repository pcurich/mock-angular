import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './page';

const routes: Routes = [
  {
    path: 'users',
    component: fromContainers.ListContainer,
  },
  {
    path: 'create',
    component: fromContainers.CreateOrUpdateContainer,
  },
  {
    path: 'update/:id',
    component: fromContainers.CreateOrUpdateContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
