import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('carousel') carousel :Slides;
slides=[
  {
    imagen: "../../assets/imgs/logotus.JPG",
  },
  { 
    imagen: "../../assets/imgs/logoOn.png",
  }
];


  constructor(public navCtrl: NavController, private screenOrientation : ScreenOrientation) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.screenOrientation.unlock();
  }
}
