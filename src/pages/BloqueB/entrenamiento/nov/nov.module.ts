import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovPage } from './nov';

@NgModule({
  declarations: [
    NovPage,
  ],
  imports: [
    IonicPageModule.forChild(NovPage),
  ],
})
export class NovPageModule {}
