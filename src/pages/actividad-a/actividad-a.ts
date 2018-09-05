import { HomePage } from './../home/home';
import { BloqaPage } from './../bloqa/bloqa';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ActividadA2Page } from '../actividad-a2/actividad-a2';




@Component({
  selector: 'page-actividad-a',
  templateUrl: 'actividad-a.html',
})
export class ActividadAPage {
second = BloqaPage;
respuesta : string;
IrAPagina = HomePage;
video: string = "https://www.youtube.com/embed/ei04XF5zDdk?rel=0&autoplay=0";
habilitar : boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
     public modalCtrl: ModalController,
  public viewCtrl: ViewController) {

  }

  feedback(){
    let modal = this.modalCtrl.create(ActividadA2Page);
    modal.present();
  }
  irHome(){
    this.navCtrl.setRoot(HomePage);
  }
  GoBack(){
    this.navCtrl.popToRoot();
  }
}
