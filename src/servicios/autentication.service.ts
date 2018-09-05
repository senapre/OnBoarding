import firebase from 'firebase'
export class AutenticationService {
    inicioSesion (correo:string, password:string){
        return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(correo,password);
    }
    cerrarsesion(){
        firebase.auth().signOut()
        .then(info=>console.log('User Disconect'))
        .catch(error=>('no desconectado' + error))
    }
}