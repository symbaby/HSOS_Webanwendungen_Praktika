import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HordeComponent } from './horde/horde.component';
import { AllianceComponent } from './alliance/alliance.component';
import { HomeComponent } from './home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HordeComponent,
    AllianceComponent,
    HomeComponent,
    WeaponsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
