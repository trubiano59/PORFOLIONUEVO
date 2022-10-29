import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { WorkComponent } from './work/work.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ErrorComponent } from './error/error.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { BotonlogoutComponent } from './botonlogout/botonlogout.component';
import { AcercademidashboardComponent } from './acercademidashboard/acercademidashboard.component';
import { EducationdashboardComponent } from './educationdashboard/educationdashboard.component';
import { WorkdashboardComponent } from './workdashboard/workdashboard.component';
import { SkillsdashboardComponent } from './skillsdashboard/skillsdashboard.component';
import { ExperiencedashboardComponent } from './experiencedashboard/experiencedashboard.component';
import { ProyectosdashboardComponent } from './proyectosdashboard/proyectosdashboard.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { AwardsdashboardComponent } from './awardsdashboard/awardsdashboard.component';
import { InterestsdashboardComponent } from './interestsdashboard/interestsdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    IndexComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    WorkComponent,
    ProyectosComponent,
    ErrorComponent,
    MainComponent,
    AcercademiComponent,
    ServiciosComponent,
    DashboardComponent,
    NavbardashboardComponent,
    BotonlogoutComponent,
    AcercademidashboardComponent,
    EducationdashboardComponent,
    WorkdashboardComponent,
    SkillsdashboardComponent,
    ExperiencedashboardComponent,
    ProyectosdashboardComponent,
    BannerdashboardComponent,
    AwardsdashboardComponent,
    InterestsdashboardComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
