import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HerramientasPage } from '../../herramientas';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the PlannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad PlannerPage');
  }
  GoBack(){
    this.navCtrl.setRoot(HerramientasPage);
  }

}
