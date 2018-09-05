import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AutenticationService } from '../../servicios/autentication.service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public AuthService: AutenticationService, public alertCtrl: AlertController) {
  }
  iniciarSesion(formulario : NgForm){
    this.AuthService.inicioSesion(
      formulario.value.correo,
      formulario.value.password
    ).then(info => console.log('User sign in') )
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Tenemos un problema',
        message: error,
        buttons: ['Ok']
      })
      alerta.present();
    })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');
  }

}
