import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../../map/map';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the AspectosLogisticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aspectos-logisticos',
  templateUrl: 'aspectos-logisticos.html',
})
export class AspectosLogisticosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screnOrientation : ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screnOrientation.unlock();
    console.log('ionViewDidLoad AspectosLogisticosPage');
  }
  GoBack(){
    this.navCtrl.setRoot(MapPage);
  }
}
