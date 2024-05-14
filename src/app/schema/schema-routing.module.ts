import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SchemaBodyContainer,
  SchemaGeneralContainer,
  SchemaHeaderContainer,
} from './page';

const routes: Routes = [
  {
    path: 'general',
    component: SchemaGeneralContainer,
  },
  {
    path: 'body',
    component: SchemaBodyContainer,
  },
  {
    path: 'header',
    component: SchemaHeaderContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShemaRoutingModule {}
