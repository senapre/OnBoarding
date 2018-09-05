import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InduccionGeneralPage } from '../../induccion-general';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the CompaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compania',
  templateUrl: 'compania.html',
})
export class CompaniaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad CompaniaPage');
  }

  GoBack(){
    this.navCtrl.setRoot(InduccionGeneralPage);
  }
}
