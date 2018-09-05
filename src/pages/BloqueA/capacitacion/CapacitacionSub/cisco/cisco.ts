import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapacitacionPage } from '../../capacitacion';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the CiscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cisco',
  templateUrl: 'cisco.html',
})
export class CiscoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad CiscoPage');
  }
  GoBack(){
    this.navCtrl.setRoot(CapacitacionPage);
  }
}
