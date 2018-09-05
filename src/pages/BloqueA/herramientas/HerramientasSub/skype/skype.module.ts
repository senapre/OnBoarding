import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkypePage } from './skype';

@NgModule({
  declarations: [
    SkypePage,
  ],
  imports: [
    IonicPageModule.forChild(SkypePage),
  ],
})
export class SkypePageModule {}
