import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [DefaultLayoutComponent, NotFoundComponent],
  exports: [DefaultLayoutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    RouterModule,
    SharedModule,
    UsersModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LayoutsModule {}
