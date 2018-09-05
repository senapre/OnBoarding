import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharepointPage } from './sharepoint';

@NgModule({
  declarations: [
    SharepointPage,
  ],
  imports: [
    IonicPageModule.forChild(SharepointPage),
  ],
})
export class SharepointPageModule {}
