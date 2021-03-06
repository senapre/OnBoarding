import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasPage } from '../../herramientas';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the DrivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drive',
  templateUrl: 'drive.html',
})
export class DrivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad DrivePage');
  }
  GoBack(){
    this.navCtrl.setRoot(HerramientasPage);
  }

}
