import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CiscoPage } from './cisco';

@NgModule({
  declarations: [
    CiscoPage,
  ],
  imports: [
    IonicPageModule.forChild(CiscoPage),
  ],
})
export class CiscoPageModule {}
