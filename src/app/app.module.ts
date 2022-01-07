import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main } from './main/main.component';
import { NavBar } from './main/navbar/navbar.component';
import { Experiencia } from './main/experiencias/experiencias.component';
import { Aprendizado } from './main/aprendizado/aprendizado.component';
import { CommonModule } from '@angular/common';
import { NavBarBotton } from './main/navbar-botton/navbar-botton.component';
import { MainPage } from './main/mainPage/mainPage.component';
import { Projetos } from './main/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    NavBar,
    NavBarBotton, 
    Experiencia,
    Aprendizado,
    MainPage,
    Projetos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainPage
    },
      {
          path: 'experiencia', component: Experiencia
      },
      {
          path: 'aprendizado', component: Aprendizado
      },
      {
          path: 'projetos', component: Projetos
      }
  ])
    //Main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
