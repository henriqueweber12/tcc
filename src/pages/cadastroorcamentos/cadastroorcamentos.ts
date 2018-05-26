import { Veiculo } from './../../model/veiculo';
import { UsuarioService } from './../../services/usuario-service';
import { Usuario } from './../../model/usuario';
import { OrcamentoService } from './../../services/orcamento-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdicionaisPage } from './../adicionais/adicionais';
import { Orcamento } from './../../model/orcamento';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastroorcamentos',
  templateUrl: 'cadastroorcamentos.html',
  providers: [OrcamentoService, UsuarioService]
})
export class CadastroOrcamentoPage {

  public veiculoparam: Veiculo;
  public orcamento: Orcamento;
  public onCallback: Function;
  public edicao = false;
  public formCadOrc: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public orcamentoService: OrcamentoService, 
              public formBuilder: FormBuilder,
              public usuarioService: UsuarioService) {
               
                this.formCadOrc = this.formBuilder.group({
                  codigo: ['', Validators.required],                 
                  nomecliente: ['', Validators.compose([Validators.required])],
                  emailcliente: ['', Validators.required],
                  fonecliente: ['', Validators.required],
                  veiculo: ['',Validators.required],
                  valor: ['', Validators.required], 
                  formapagamento: ['', Validators.required]        
                });
             //   console.log(this.navParams.get('orcamento'));
                console.log(this.navParams.get('veiculoparam'));

               

    this.navParams.get('callback');
    this.onCallback = this.navParams.get('callback'); 
    this.orcamento = this.navParams.get('orcamento');

if(this.orcamento == null){
  this.orcamento = new Orcamento();
  this.orcamento.veiculo = this.navParams.get('veiculoparam');
  this.orcamento.usuario = JSON.parse(localStorage.getItem('usuario'));
}  else {
   this.edicao = true;
}

 //   this.orcamento.veiculo = this.navParams.get('veiculoparam');

  //  this.orcamento.usuario = JSON.parse(localStorage.getItem('usuario'));
 }

 salvar(){
  this.orcamentoService.save(this.orcamento).subscribe((data : Orcamento) => {
    if(data !== null){
     this.navCtrl.setRoot(AdicionaisPage);
  }
  });
}

 abrirAdicionais(){
  this.navCtrl.push(AdicionaisPage)
 }

}

 
