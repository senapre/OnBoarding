import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the PresentacionAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentacion-area',
  templateUrl: 'presentacion-area.html',
})
export class PresentacionAreaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad PresentacionAreaPage');
  }

}
