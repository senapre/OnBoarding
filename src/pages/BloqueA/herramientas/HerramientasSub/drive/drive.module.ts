import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrivePage } from './drive';

@NgModule({
  declarations: [
    DrivePage,
  ],
  imports: [
    IonicPageModule.forChild(DrivePage),
  ],
})
export class DrivePageModule {}
