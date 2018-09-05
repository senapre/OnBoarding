import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-actividad-a2',
  templateUrl: 'actividad-a2.html',
})
export class ActividadA2Page {
  mensaje:any;
  respuesta : string ="";
  compara:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }
cerrar(){
this.viewCtrl.dismiss();
}
enviar(){
  let mensaje = {
    res: this.respuesta
  }
  alert
  console.log('Respuesta enviada');
  console.log('Respuesta: ' + mensaje.res);
  //let compara=true;
  this.viewCtrl.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActividadA2Page');
  }

}
