import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentacionAreaPage } from './presentacion-area';

@NgModule({
  declarations: [
    PresentacionAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentacionAreaPage),
  ],
})
export class PresentacionAreaPageModule {}
