import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NubePage } from './nube';

@NgModule({
  declarations: [
    NubePage,
  ],
  imports: [
    IonicPageModule.forChild(NubePage),
  ],
})
export class NubePageModule {}
