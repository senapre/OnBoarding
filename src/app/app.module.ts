import { ActividadcPage } from './../pages/actividadc/actividadc';
import { ActividadBPage } from './../pages/actividad-b/actividad-b';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EnlacesPage } from '../pages/enlaces/enlaces';
import { UsuarioPage } from './../pages/usuario/usuario';
import { BloqaPage } from './../pages/bloqa/bloqa';
import { BloqbPage } from '../pages/bloqb/bloqb';
import { ActividadAPage } from '../pages/actividad-a/actividad-a';
import { ActividadA2Page } from '../pages/actividad-a2/actividad-a2';
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { MapPage } from '../pages/map/map';
import { InduccionGeneralPage } from '../pages/BloqueA/induccion-general/induccion-general';
import { CapacitacionPage } from '../pages/BloqueA/capacitacion/capacitacion';
import { HerramientasPage } from '../pages/BloqueA/herramientas/herramientas';
import { HerramientasMovilPage } from '../pages/BloqueA/herramientas-movil/herramientas-movil';
import { AccesoSistemasPage } from '../pages/BloqueA/acceso-sistemas/acceso-sistemas';
import { ImageResizer } from '@ionic-native/image-resizer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BeneficiosPage } from '../pages/BloqueA/induccion-general/InduccionSub/beneficios/beneficios';
import { ComitePage } from '../pages/BloqueA/induccion-general/InduccionSub/comite/comite';
import { ContextoPage } from '../pages/BloqueA/induccion-general/InduccionSub/contexto/contexto';
import { EstructuraPage } from '../pages/BloqueA/induccion-general/InduccionSub/estructura/estructura';
import { EticaPage } from '../pages/BloqueA/induccion-general/InduccionSub/etica/etica';
import { JornadaPage } from '../pages/BloqueA/induccion-general/InduccionSub/jornada/jornada';
import { LineamientosPage } from '../pages/BloqueA/induccion-general/InduccionSub/lineamientos/lineamientos';
import { PoliticasPage } from '../pages/BloqueA/induccion-general/InduccionSub/politicas/politicas';
import { RecorridoPage } from '../pages/BloqueA/induccion-general/InduccionSub/recorrido/recorrido';
import { SeguridadPage } from '../pages/BloqueA/induccion-general/InduccionSub/seguridad/seguridad';
import { VisitaPage } from '../pages/BloqueA/induccion-general/InduccionSub/visita/visita';
import { OfficePage } from '../pages/BloqueA/herramientas-movil/HerramientasMovSub/office/office';
import { OeNotePage } from '../pages/BloqueA/herramientas-movil/HerramientasMovSub/oe-note/oe-note';
import { DirectorioPage } from '../pages/BloqueA/herramientas-movil/HerramientasMovSub/directorio/directorio';
import { SkypePage } from '../pages/BloqueA/herramientas/HerramientasSub/skype/skype';
import { DrivePage } from '../pages/BloqueA/herramientas/HerramientasSub/drive/drive';
import { PlannerPage } from '../pages/BloqueA/herramientas/HerramientasSub/planner/planner';
import { CiscoPage } from '../pages/BloqueA/capacitacion/CapacitacionSub/cisco/cisco';
import { EquiposPage } from '../pages/BloqueA/capacitacion/CapacitacionSub/equipos/equipos';
import { NubePage } from '../pages/BloqueA/capacitacion/CapacitacionSub/nube/nube';
import { SapPage } from '../pages/BloqueA/capacitacion/CapacitacionSub/sap/sap';
import { SharepointPage } from '../pages/BloqueA/capacitacion/CapacitacionSub/sharepoint/sharepoint';
import { TusapPage } from '../pages/BloqueA/capacitacion/CapacitacionSub/tusap/tusap';
import { AspectosLogisticosPage } from '../pages/BloqueA/aspectos-logisticos/aspectos-logisticos';
import { CompaniaPage } from '../pages/BloqueA/induccion-general/InduccionSub/compania/compania';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { EntrenamientoPage } from '../pages/BloqueB/entrenamiento/entrenamiento';
import { EvaluacionesPage } from '../pages/BloqueB/evaluaciones/evaluaciones';
import { InduccionEspecificaPage } from '../pages/BloqueB/induccion-especifica/induccion-especifica';
import { ControlPage } from '../pages/BloqueB/Entrenamiento/control/control';
import { DesignerPage } from '../pages/BloqueB/Entrenamiento/designer/designer';
import { DrillingPage } from '../pages/BloqueB/Entrenamiento/drilling/drilling';
import { ExcelPage } from '../pages/BloqueB/Entrenamiento/excel/excel';
import { FlashPage } from '../pages/BloqueB/Entrenamiento/flash/flash';
import { NovPage } from '../pages/BloqueB/Entrenamiento/nov/nov';
import { PlanificacionPage } from '../pages/BloqueB/Entrenamiento/planificacion/planificacion';
import { SolpedPage } from '../pages/BloqueB/Entrenamiento/solped/solped';
import { EncuestaPage } from '../pages/BloqueB/evaluaciones/encuesta/encuesta';
import { AsignacionProyectoPage } from '../pages/BloqueB/induccion-especifica/asignacion-proyecto/asignacion-proyecto';
import { ManualPage } from '../pages/BloqueB/induccion-especifica/manual/manual';
import { PresentacionAreaPage } from '../pages/BloqueB/induccion-especifica/presentacion-area/presentacion-area';
import { PresentacionJefePage } from '../pages/BloqueB/induccion-especifica/presentacion-jefe/presentacion-jefe';
import { RecepcionPage } from '../pages/BloqueB/induccion-especifica/recepcion/recepcion';
import { TutorPage } from '../pages/BloqueB/induccion-especifica/tutor/tutor';
import { AccesoSistemasBPage } from '../pages/BloqueB/acceso-sistemas-b/acceso-sistemas-b';
import { EvaluacionPage } from '../pages/BloqueB/evaluaciones/evaluacion/evaluacion';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { AutenticationService } from '../servicios/autentication.service';



@NgModule({
  declarations: [
    MyApp,HomePage,UsuarioPage,EnlacesPage,BloqaPage,BloqbPage,ActividadAPage,ActividadA2Page,ActividadBPage,
    ActividadcPage,MapPage,InduccionGeneralPage,CapacitacionPage,HerramientasPage,HerramientasMovilPage,
    AccesoSistemasPage,AspectosLogisticosPage,BeneficiosPage,ComitePage,CompaniaPage,ContextoPage,
    EstructuraPage,EticaPage,JornadaPage,LineamientosPage,PoliticasPage,RecorridoPage,SeguridadPage,VisitaPage,OfficePage,
    OeNotePage,DirectorioPage,SkypePage,DrivePage,PlannerPage,CiscoPage,EquiposPage,NubePage,SapPage,SharepointPage,TusapPage,
    EntrenamientoPage,EvaluacionesPage,InduccionEspecificaPage,ControlPage,DesignerPage,DrillingPage,
    ExcelPage,FlashPage,NovPage,PlanificacionPage,SolpedPage,EncuestaPage,EvaluacionPage,AsignacionProyectoPage,ManualPage,
    PresentacionAreaPage,PresentacionJefePage,RecepcionPage,TutorPage,AccesoSistemasBPage,InicioSesionPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicImageViewerModule,
    ZoomAreaModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,HomePage,UsuarioPage,EnlacesPage,BloqaPage,BloqbPage, ActividadAPage,ActividadA2Page,ActividadBPage,ActividadcPage,MapPage,
    InduccionGeneralPage,CapacitacionPage,HerramientasPage,HerramientasMovilPage,AspectosLogisticosPage,AccesoSistemasPage,BeneficiosPage,
    ComitePage,CompaniaPage,ContextoPage,EstructuraPage,EticaPage,JornadaPage,LineamientosPage,PoliticasPage,RecorridoPage,SeguridadPage,
    VisitaPage,OfficePage,OeNotePage,DirectorioPage,SkypePage,DrivePage,PlannerPage,CiscoPage,EquiposPage,NubePage,SapPage,SharepointPage,
    TusapPage,EntrenamientoPage,EvaluacionesPage,InduccionEspecificaPage,ControlPage,DesignerPage,DrillingPage,
    ExcelPage,FlashPage,NovPage,PlanificacionPage,SolpedPage,EncuestaPage,EvaluacionPage,AsignacionProyectoPage,ManualPage,
    PresentacionAreaPage,PresentacionJefePage,RecepcionPage,TutorPage,AccesoSistemasBPage,InicioSesionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImageResizer,
    ScreenOrientation,
    AutenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
