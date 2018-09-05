import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../../map/map';
import { DrivePage } from './HerramientasSub/drive/drive';
import { PlannerPage } from './HerramientasSub/planner/planner';
import { SkypePage } from './HerramientasSub/skype/skype';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the HerramientasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herramientas',
  templateUrl: 'herramientas.html',
})
export class HerramientasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad HerramientasPage');
  }
  GoBack(){
    this.navCtrl.setRoot(MapPage);
  }
  drive(){
    this.navCtrl.setRoot(DrivePage);
  }
  planner(){
    this.navCtrl.setRoot(PlannerPage);
  }
  skype(){
    this.navCtrl.setRoot(SkypePage);
  }

}
