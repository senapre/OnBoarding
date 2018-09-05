import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InduccionGeneralPage } from '../../induccion-general';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the EticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etica',
  templateUrl: 'etica.html',
})
export class EticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad EticaPage');
  }

  GoBack(){
    this.navCtrl.setRoot(InduccionGeneralPage);
  }
}
