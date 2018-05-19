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

  public orcamento: Orcamento;
  public onCallback: Function;
  public edicao = false;
  public formCadOrc: FormGroup;
//  public usuario : Usuario;

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

    this.navParams.get('callback');
//    this.buscarusuario();


    this.onCallback = this.navParams.get('callback'); 
    this.orcamento = this.navParams.get('orcamento');

    if(this.orcamento == null){
      this.orcamento = new Orcamento();
   }  else {
       this.edicao = true;
   }
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

// buscarusuario(){
//  this.usuario = JSON.parse(localStorage.getItem('usuario'));
//  if(this.usuario != null){
//    this.usuarioService.findById(this.usuario.id).subscribe((usuario:Usuario)=>{
//      this.usuario = usuario;
//    });
//  }else{
//    this.usuario = new Usuario();
//  }
//}


  }

 
