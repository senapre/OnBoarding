import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentacionJefePage } from './presentacion-jefe';

@NgModule({
  declarations: [
    PresentacionJefePage,
  ],
  imports: [
    IonicPageModule.forChild(PresentacionJefePage),
  ],
})
export class PresentacionJefePageModule {}
