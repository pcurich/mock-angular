import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing-routing.module';
import { PageContainer } from './page/page.container';

@NgModule({
  declarations: [PageContainer],
  exports: [PageContainer],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
