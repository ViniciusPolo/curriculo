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

@NgModule({
  declarations: [
    AppComponent,
    Main,
    NavBar,
    NavBarBotton, 
    Experiencia,
    Aprendizado,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forChild([
      {
          path: 'experiencia', component: Experiencia
      },
      {
          path: 'aprendizado', component: Aprendizado
      }
  ])
    //Main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
