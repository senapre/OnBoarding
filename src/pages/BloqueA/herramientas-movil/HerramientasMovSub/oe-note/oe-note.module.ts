import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OeNotePage } from './oe-note';

@NgModule({
  declarations: [
    OeNotePage,
  ],
  imports: [
    IonicPageModule.forChild(OeNotePage),
  ],
})
export class OeNotePageModule {}
