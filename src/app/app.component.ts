import { BloqbPage } from './../pages/bloqb/bloqb';
import { BloqaPage } from './../pages/bloqa/bloqa';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { EnlacesPage } from '../pages/enlaces/enlaces';
import { MapPage } from '../pages/map/map';
import { AutenticationService } from '../servicios/autentication.service';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  conexion = false;
  @ViewChild('content') menu :NavController;
  rootPage:any = HomePage;
  Usuario = UsuarioPage;
  Home = HomePage;
  Enlaces = EnlacesPage;
  BloqueA = BloqaPage;
  BloqueB = BloqbPage;
  Mapa = MapPage;
  Inicio = InicioSesionPage;
  
  user = [
    {
      nombre: 'Usuario',
      correo: 'user@tuscanydrilling.com',
      imagen: '../assets/imgs/user.png',
    }
  ];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              public menuCtrl:MenuController, public alertCtrl:AlertController,
              public authService: AutenticationService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
    apiKey: "AIzaSyAgyfuRYzZ9IVfkRnSPdR-IyYvYyv2Bvxk",  
    authDomain: "onboarding-cdf43.firebaseapp.com"
    })
    firebase.auth().onAuthStateChanged(
      conection => {
        if (conection !=null ){
          this.conexion=true;
          this.menu.setRoot(this.Home)
        }else{
          this.conexion=false;
          this.menu.setRoot(this.Inicio)
        }
      }
    )
  }
  irAPagina(pagina:any){
    this.menu.setRoot(pagina);
    this.menuCtrl.close();
  }
  cerrarSesion(){
    this.authService.cerrarsesion();
    this.menuCtrl.close();
  }
}

