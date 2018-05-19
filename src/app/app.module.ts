import { HttpModule, JsonpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrcamentosPage } from '../pages/orcamentos/orcamentos';
import { CadastroveiculoPage } from '../pages/cadastroveiculos/cadastroveiculos';
import { VeiculosPage } from '../pages/veiculos/veiculos';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from './../pages/perfil/perfil';
import { CadastroUsuarioPage } from './../pages/cadastrousuario/cadastrousuario';
import { AdicionaisPage } from './../pages/adicionais/adicionais';
import { CadastroOrcamentoPage } from './../pages/cadastroorcamentos/cadastroorcamentos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { httpFactory} from "./http.factory";

@NgModule({
  declarations: [
    MyApp,
    OrcamentosPage,
    CadastroveiculoPage,
    VeiculosPage,
    TabsPage,
    PerfilPage,
    LoginPage,
    CadastroOrcamentoPage,
    AdicionaisPage,
    CadastroUsuarioPage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrcamentosPage,
    CadastroveiculoPage,
    VeiculosPage,
    TabsPage,
    PerfilPage,
    LoginPage,
    CadastroOrcamentoPage,
    AdicionaisPage,
    CadastroUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {
    //   provide : Http,
    //   useFactory : httpFactory,
    //   deps : [XHRBackend, RequestOptions]
    // },
  ]
})
export class AppModule {}
