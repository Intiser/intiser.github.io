import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutModule } from './layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { LandingComponent } from './landing/landing.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { StudyComponent } from './study/study.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { VertcialTabModule } from './custom/vertcial-tab/vertcial-tab.module';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    WorksComponent,
    ContactComponent,
    LandingComponent,
    StudyComponent,
    MainComponent,
    BlogComponent,
    FamilyTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatStepperModule,
    HttpClientModule,
    VertcialTabModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
