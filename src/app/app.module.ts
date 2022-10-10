import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ModalloginComponent } from './modallogin/modallogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RedesComponent } from './redes/redes.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { IndexComponent } from './index/index.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { ErrorComponent } from './error/error.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercademiComponent,
    BannerComponent,
    LoginComponent,
    MainComponent,
    ModalloginComponent,
    NavbarComponent,
    ProyectosComponent,
    RedesComponent,
    SkillsComponent,
    WorkComponent,
    IndexComponent,
    AwardsComponent,
    EducationComponent,
    ErrorComponent,
    ExperienceComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
