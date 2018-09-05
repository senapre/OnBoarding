import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContextoPage } from './contexto';

@NgModule({
  declarations: [
    ContextoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContextoPage),
  ],
})
export class ContextoPageModule {}
