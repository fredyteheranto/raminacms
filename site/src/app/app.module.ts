import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'ng2-avatar';


import { AppComponent } from './app.component';
//import { RaminaComponent } from './componentes/ramina/ramina.component';
//import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app.rutas';
//import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule.forRoot(),
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
