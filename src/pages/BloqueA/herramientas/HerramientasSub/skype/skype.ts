import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasPage } from '../../herramientas';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the SkypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skype',
  templateUrl: 'skype.html',
})
export class SkypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad SkypePage');
  }
  GoBack(){
    this.navCtrl.setRoot(HerramientasPage);
  }

}
