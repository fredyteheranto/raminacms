import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'ng2-avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
//import { RaminaComponent } from './componentes/ramina/ramina.component';
//import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app.rutas';
import { ServicioUsuarios } from "./servicios/usuario.servicio";

//import { PostComponent } from './componentes/post/post.component';
//import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,


  ],
 
  providers: [AppComponent,ServicioUsuarios],
  bootstrap: [AppComponent]
})
export class AppModule { }
