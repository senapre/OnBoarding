import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../../map/map';
import { CiscoPage } from './CapacitacionSub/cisco/cisco';
import { EquiposPage } from './CapacitacionSub/equipos/equipos';
import { NubePage } from './CapacitacionSub/nube/nube';
import { SapPage } from './CapacitacionSub/sap/sap';
import { SharepointPage } from './CapacitacionSub/sharepoint/sharepoint';
import { TusapPage } from './CapacitacionSub/tusap/tusap';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the CapacitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capacitacion',
  templateUrl: 'capacitacion.html',
})
export class CapacitacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad CapacitacionPage');
  }
  GoBack(){
    this.navCtrl.setRoot(MapPage);
  }
  cisco(){
    this.navCtrl.setRoot(CiscoPage);
  }
  equipos(){
    this.navCtrl.setRoot(EquiposPage);
  }
  nube(){
    this.navCtrl.setRoot(NubePage);
  }
  sap(){
    this.navCtrl.setRoot(SapPage);
  }
  sharepoint(){
    this.navCtrl.setRoot(SharepointPage);
  }
  tusap(){
    this.navCtrl.setRoot(TusapPage);
  }

}
