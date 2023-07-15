import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentalControlPageRoutingModule } from './parental-control-routing.module';

import { ParentalControlPage } from './parental-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentalControlPageRoutingModule
  ],
  declarations: [ParentalControlPage]
})
export class ParentalControlPageModule {}
