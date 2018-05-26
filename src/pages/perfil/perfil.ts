import { LoginPage } from './../login/login';
import { TabsPage } from './../tabs/tabs';

import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { NavController, Platform, AlertController, App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public alertCtrl : AlertController, public app: App, public menu: MenuController) {
  }

}
  
 // let prompt = this.alertCtrl.create({
 //   title: 'ATENÇÃO!',
 //   subTitle: 'Deseja sair do app?',
 //   buttons:[
 //     {
 //       text: 'Não',
 //       handler:() => {         
 //       }
 //     },
 //     {
//        text: 'Sim',
//        handler: () => {
//          localStorage.setItem('usuario', null);
//          this.navCtrl.setRoot(LoginPage);
//        }
//      }
 //   ]
//  });
//  prompt.present(); 
 

