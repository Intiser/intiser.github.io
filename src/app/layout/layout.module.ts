import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports:[
    SidebarComponent,
    RightSidebarComponent
  ]
})
export class LayoutModule { }
