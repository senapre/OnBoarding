//import { ActividadA2Page } from './../actividad-a2/actividad-a2';
import { HomePage } from './../home/home';
//import { ActividadBPage } from './../actividad-b/actividad-b';
//import { ActividadAPage } from './../actividad-a/actividad-a';
import { MapPage } from '../map/map';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { InduccionGeneralPage } from '../BloqueA/induccion-general/induccion-general'
import { AspectosLogisticosPage } from '../BloqueA/aspectos-logisticos/aspectos-logisticos';
import { CapacitacionPage } from '../BloqueA/capacitacion/capacitacion';
import { HerramientasPage } from '../BloqueA/herramientas/herramientas';
import { HerramientasMovilPage } from '../BloqueA/herramientas-movil/herramientas-movil';
import { AccesoSistemasPage } from '../BloqueA/acceso-sistemas/acceso-sistemas';




@Component({
  selector: 'page-bloqa',
  templateUrl: 'bloqa.html',
})
export class BloqaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
//Metodos para la visualización de paginas modal
  induccion() {
    let modal = this.modalCtrl.create(InduccionGeneralPage);
    modal.present();
  }
  Aspectos() {
    let modal = this.modalCtrl.create(AspectosLogisticosPage);
    modal.present();
  }
  Capacitacion() {
    let modal = this.modalCtrl.create(CapacitacionPage);
    modal.present();
  }
  Herramientas() {
    let modal = this.modalCtrl.create(HerramientasPage);
    modal.present();
  }
  HerramientasMov() {
    let modal = this.modalCtrl.create(HerramientasMovilPage);
    modal.present();
  }
  Acceso() {
    let modal = this.modalCtrl.create(AccesoSistemasPage);
    modal.present();
  }
  /*IrAPaginaA() {
    this.navCtrl.setRoot(ActividadAPage);
  };
  IrAPaginaB() {
    this.navCtrl.setRoot(ActividadBPage);
  }*/
  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  map() {
    this.navCtrl.setRoot(MapPage);
  }
}
