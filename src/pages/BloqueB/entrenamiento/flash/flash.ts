import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the FlashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screeOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screeOrientation.unlock();
    console.log('ionViewDidLoad FlashPage');
  }

}
