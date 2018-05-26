import { Component } from '@angular/core';
import { LoginPage } from './../login/login';

import { VeiculosPage } from '../veiculos/veiculos';
import { OrcamentosPage } from '../orcamentos/orcamentos';
import { CadastroveiculoPage } from '../cadastroveiculos/cadastroveiculos';
import { PerfilPage } from './../perfil/perfil';
import { NavController, Platform, AlertController, App } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VeiculosPage;
  tab2Root = OrcamentosPage;
  tab3Root = CadastroveiculoPage;
  tab4Root = PerfilPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  sair() {
    let prompt = this.alertCtrl.create({
      title: 'ATENÇÃO!',
      subTitle: 'Deseja realmente sair do app?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log("logout");
            localStorage.setItem('usuario', null);
            localStorage.clear();
            this.navCtrl.setRoot(LoginPage);
          }
        }

      ]
    });
    prompt.present();
  }
}
