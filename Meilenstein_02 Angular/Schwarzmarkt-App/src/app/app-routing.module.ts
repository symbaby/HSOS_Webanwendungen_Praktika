import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HordeComponent } from './horde/horde.component';
import { AllianceComponent } from './alliance/alliance.component';
import { WaffenmenueComponent } from './waffenmenue/waffenmenue.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'horde', component: HordeComponent },
  { path: 'alliance', component: AllianceComponent },
  { path: 'waffenmenue', component: WaffenmenueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
