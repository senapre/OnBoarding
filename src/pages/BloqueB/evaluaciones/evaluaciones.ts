import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the EvaluacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluaciones',
  templateUrl: 'evaluaciones.html',
})
export class EvaluacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad EvaluacionesPage');
  }

}
