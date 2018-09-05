import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the AccesoSistemasBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceso-sistemas-b',
  templateUrl: 'acceso-sistemas-b.html',
})
export class AccesoSistemasBPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation :ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad AccesoSistemasBPage');
  }

}
