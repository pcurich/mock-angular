import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { components } from './components';
import { containers } from './page';
import { ShemaRoutingModule } from './schema-routing.module';

@NgModule({
  declarations: [containers, components],
  exports: [containers],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShemaRoutingModule,
  ],
})
export class SchemaModule {}
