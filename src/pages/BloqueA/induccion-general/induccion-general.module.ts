import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InduccionGeneralPage } from './induccion-general';

@NgModule({
  declarations: [
    InduccionGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(InduccionGeneralPage),
  ],
})
export class InduccionGeneralPageModule {}
