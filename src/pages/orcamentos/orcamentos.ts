import { CadastroOrcamentoPage } from './../cadastroorcamentos/cadastroorcamentos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-orcamentos',
  templateUrl: 'orcamentos.html'
})
export class OrcamentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  cadastrarOrcamento(){
    this.navCtrl.push(CadastroOrcamentoPage)
  }


}
