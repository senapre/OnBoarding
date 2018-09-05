import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstructuraPage } from './estructura';

@NgModule({
  declarations: [
    EstructuraPage,
  ],
  imports: [
    IonicPageModule.forChild(EstructuraPage),
  ],
})
export class EstructuraPageModule {}
