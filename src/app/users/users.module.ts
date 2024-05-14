import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { components } from './components/index';
import { containers } from './page';
import { UsersService } from './services/users.service';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [containers, components],
  exports: [containers],
  providers: [UsersService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UsersModule {}
