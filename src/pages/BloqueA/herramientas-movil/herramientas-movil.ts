import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../../map/map';
import { OeNotePage } from './HerramientasMovSub/oe-note/oe-note';
import { DirectorioPage } from './HerramientasMovSub/directorio/directorio';
import { OfficePage } from './HerramientasMovSub/office/office';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the HerramientasMovilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-herramientas-movil',
  templateUrl: 'herramientas-movil.html',
})
export class HerramientasMovilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad HerramientasMovilPage');
  }
  GoBack(){
    this.navCtrl.setRoot(MapPage);
  }
  onenote(){
    this.navCtrl.setRoot(OeNotePage);
  }
  directorio(){
    this.navCtrl.setRoot(DirectorioPage);
  }
  office(){
    this.navCtrl.setRoot(OfficePage);
  }
}
