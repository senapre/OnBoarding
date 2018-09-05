import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../home/home';
import { EntrenamientoPage } from '../BloqueB/entrenamiento/entrenamiento';
import { EvaluacionesPage } from '../BloqueB/evaluaciones/evaluaciones';
import { InduccionEspecificaPage } from '../BloqueB/induccion-especifica/induccion-especifica';
import { AccesoSistemasBPage } from '../BloqueB/acceso-sistemas-b/acceso-sistemas-b';

/**
 * Generated class for the BloqbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloqb',
  templateUrl: 'bloqb.html',
})
export class BloqbPage {
  @ViewChild('content') menu :NavController;
  rootPage:any = HomePage;
  Acceso = AccesoSistemasBPage;
  Entrenamiento = EntrenamientoPage;
  Evaluaciones = EvaluacionesPage;
  Induccion = InduccionEspecificaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Bloque B');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
 irPage(pagina:any){
   this.navCtrl.setRoot(pagina);
 }
  irHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
