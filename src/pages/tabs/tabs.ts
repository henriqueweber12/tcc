import { Component } from '@angular/core';

import { VeiculosPage } from '../veiculos/veiculos';
import { OrcamentosPage } from '../orcamentos/orcamentos';
import { CadastroveiculoPage } from '../cadastroveiculos/cadastroveiculos';
import { PerfilPage } from './../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VeiculosPage;
  tab2Root = OrcamentosPage;
  tab3Root = CadastroveiculoPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
