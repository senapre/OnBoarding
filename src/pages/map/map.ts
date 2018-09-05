import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InduccionGeneralPage } from '../BloqueA/induccion-general/induccion-general';
import { HerramientasPage } from '../BloqueA/herramientas/herramientas';
import { HerramientasMovilPage } from '../BloqueA/herramientas-movil/herramientas-movil';
import { AspectosLogisticosPage } from '../BloqueA/aspectos-logisticos/aspectos-logisticos';
import { CapacitacionPage } from '../BloqueA/capacitacion/capacitacion';
import { AccesoSistemasPage } from '../BloqueA/acceso-sistemas/acceso-sistemas';
import { ScreenOrientation } from '@ionic-native/screen-orientation';



@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  enlace = 'ActividadBPage';
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private screenOrientation:ScreenOrientation) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Bloque A');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  //Metodos para llamar a las respectivas paginas, si se realiza por medio de modal se desconfiguran las vistas

  /*let modal = this.modalCtrl.create(InduccionGeneralPage);
  modal.present();*/
  induccion() {
    this.navCtrl.setRoot(InduccionGeneralPage);
  }
  herramientas() {
    this.navCtrl.setRoot(HerramientasPage);
  }
  herramientasMov() {
    this.navCtrl.setRoot(HerramientasMovilPage);
  }
  aspectos() {
    this.navCtrl.setRoot(AspectosLogisticosPage);
  }
  capacitacion() {
    this.navCtrl.setRoot(CapacitacionPage);
  }
  acceso() {
    this.navCtrl.setRoot(AccesoSistemasPage);
  }
  /*
  IrAPaginaA(){
    this.navCtrl.setRoot(ActividadAPage);
  };
  IrAPaginaB(){
    this.navCtrl.setRoot(ActividadBPage);
  }*/
  irHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
