import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BloqaPage } from '../bloqa/bloqa';


@IonicPage()
@Component({
  selector: 'page-actividad-b',
  templateUrl: 'actividad-b.html',
})
export class ActividadBPage {

  image: string = null;
  constructor(
    private camera: Camera, public navCtrl: NavController
  ) {}

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      
    })
    .catch(error =>{
      console.error( error );
    });
  }
  irHome(){
    this.navCtrl.setRoot(HomePage);
  }
  GoBack(){
    this.navCtrl.setRoot(BloqaPage);
  }
}