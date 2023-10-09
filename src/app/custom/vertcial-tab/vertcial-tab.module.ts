import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VertcialTabRoutingModule } from './vertcial-tab-routing.module';
import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';
import { VerticalTabListComponent } from './vertical-tab-list/vertical-tab-list.component';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';


@NgModule({
  declarations: [
    VerticalTabComponent,
    VerticalTabListComponent
  ],
  imports: [
    CommonModule,
    VertcialTabRoutingModule,
    MatListModule
  ],
  exports: [
    VerticalTabComponent,
    VerticalTabListComponent
  ]
})
export class VertcialTabModule { }
