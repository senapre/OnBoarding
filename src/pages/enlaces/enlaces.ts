import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';



@Component({
  selector: 'page-enlaces',
  templateUrl: 'enlaces.html',
})
export class EnlacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.screenOrientation.unlock();
  }
  irHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
