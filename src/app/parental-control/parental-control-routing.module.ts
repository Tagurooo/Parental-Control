import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentalControlPage } from './parental-control.page';

const routes: Routes = [
  {
    path: '',
    component: ParentalControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentalControlPageRoutingModule {}
