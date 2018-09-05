import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../../map/map';
import { BeneficiosPage } from './InduccionSub/beneficios/beneficios';
import { ComitePage } from './InduccionSub/comite/comite';
import { ContextoPage } from './InduccionSub/contexto/contexto';
import { EstructuraPage } from './InduccionSub/estructura/estructura';
import { EticaPage } from './InduccionSub/etica/etica';
import { JornadaPage } from './InduccionSub/jornada/jornada';
import { LineamientosPage } from './InduccionSub/lineamientos/lineamientos';
import { PoliticasPage } from './InduccionSub/politicas/politicas';
import { RecorridoPage } from './InduccionSub/recorrido/recorrido';
import { SeguridadPage } from './InduccionSub/seguridad/seguridad';
import { VisitaPage } from './InduccionSub/visita/visita';
import { CompaniaPage } from './InduccionSub/compania/compania';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the InduccionGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-induccion-general',
  templateUrl: 'induccion-general.html',
})
export class InduccionGeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    this.screenOrientation.unlock();
    console.log('ionViewDidLoad InduccionGeneralPage');
  }
  GoBack(){
    this.navCtrl.setRoot(MapPage);
  }
  beneficios(){
    this.navCtrl.setRoot(BeneficiosPage);
  }
  comite(){
    this.navCtrl.setRoot(ComitePage);
  }
  compania(){
    this.navCtrl.setRoot(CompaniaPage);
  }
  contexto(){
    this.navCtrl.setRoot(ContextoPage);
  }
  estructura(){
    this.navCtrl.setRoot(EstructuraPage);
  }
  etica(){
    this.navCtrl.setRoot(EticaPage);
  }
  jornada(){
    this.navCtrl.setRoot(JornadaPage);
  }
  lineamientos(){
    this.navCtrl.setRoot(LineamientosPage);
  }
  politicas(){
    this.navCtrl.setRoot(PoliticasPage);
  }
  recorrido(){
    this.navCtrl.setRoot(RecorridoPage);
  }
  seguridad(){
    this.navCtrl.setRoot(SeguridadPage);
  }
  visita(){
    this.navCtrl.setRoot(VisitaPage);
  }
}
