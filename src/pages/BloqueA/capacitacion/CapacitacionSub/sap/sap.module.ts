import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SapPage } from './sap';

@NgModule({
  declarations: [
    SapPage,
  ],
  imports: [
    IonicPageModule.forChild(SapPage),
  ],
})
export class SapPageModule {}
