import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrillingPage } from './drilling';

@NgModule({
  declarations: [
    DrillingPage,
  ],
  imports: [
    IonicPageModule.forChild(DrillingPage),
  ],
})
export class DrillingPageModule {}
