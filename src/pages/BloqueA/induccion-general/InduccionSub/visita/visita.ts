import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InduccionGeneralPage } from '../../induccion-general';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the VisitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visita',
  templateUrl: 'visita.html',
})
export class VisitaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private screenOrientation:ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad VisitaPage');
  }

  GoBack(){
    this.navCtrl.setRoot(InduccionGeneralPage);
  }
}
