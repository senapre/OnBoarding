import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanificacionPage } from './planificacion';

@NgModule({
  declarations: [
    PlanificacionPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanificacionPage),
  ],
})
export class PlanificacionPageModule {}
