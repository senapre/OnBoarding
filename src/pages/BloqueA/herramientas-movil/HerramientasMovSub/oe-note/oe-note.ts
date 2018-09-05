import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasMovilPage } from '../../herramientas-movil';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the OeNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oe-note',
  templateUrl: 'oe-note.html',
})
export class OeNotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sreenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.sreenOrientation.unlock();
    console.log('ionViewDidLoad OeNotePage');
  }
  GoBack(){
    this.navCtrl.setRoot(HerramientasMovilPage);
  }
}
