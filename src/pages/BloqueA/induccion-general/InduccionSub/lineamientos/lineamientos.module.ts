import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineamientosPage } from './lineamientos';

@NgModule({
  declarations: [
    LineamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(LineamientosPage),
  ],
})
export class LineamientosPageModule {}
