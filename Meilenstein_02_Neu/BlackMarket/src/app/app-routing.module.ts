import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HordeComponent} from "./horde/horde.component";
import {AllianceComponent} from "./alliance/alliance.component";
import {HomeComponent} from "./home/home.component";
import {WeaponsComponent} from "./weapons/weapons.component";

const routes: Routes = [
  { path: 'horde', component: HordeComponent },
  { path: 'alliance', component: AllianceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'weapons', component: WeaponsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
