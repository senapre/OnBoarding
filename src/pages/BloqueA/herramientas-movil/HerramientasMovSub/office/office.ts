import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasMovilPage } from '../../herramientas-movil';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the OfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-office',
  templateUrl: 'office.html',
})
export class OfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad OfficePage');
  }
  GoBack(){
    this.navCtrl.setRoot(HerramientasMovilPage);
  }
}
