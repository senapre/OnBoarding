import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompaniaPage } from './compania';

@NgModule({
  declarations: [
    CompaniaPage,
  ],
  imports: [
    IonicPageModule.forChild(CompaniaPage),
  ],
})
export class CompaniaPageModule {}
