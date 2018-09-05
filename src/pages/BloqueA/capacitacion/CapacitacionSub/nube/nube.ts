import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapacitacionPage } from '../../capacitacion';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the NubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nube',
  templateUrl: 'nube.html',
})
export class NubePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad NubePage');
  }
  GoBack(){
    this.navCtrl.setRoot(CapacitacionPage);
  }
}
