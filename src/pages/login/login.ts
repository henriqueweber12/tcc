import { CadastroUsuarioPage } from './../cadastrousuario/cadastrousuario';
import { TabsPage } from './../tabs/tabs';
import { UsuarioService } from './../../services/usuario-service';
import { Usuario } from './../../model/usuario';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsuarioService]
})
export class LoginPage {
  
  public usuario : Usuario = new Usuario();
  public formLogin: FormGroup;
  public salvou = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public usuarioService: UsuarioService) {

    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required]
    });
  }
  
  logar() {
     this.usuarioService.logar(this.usuario).subscribe((data: Usuario) => {
       if (data !== null){
          localStorage.setItem('usuario', JSON.stringify(data));
          this.navCtrl.setRoot(TabsPage);
       }
     });
    }

  public abrirCadastroUsuario(){
    this.navCtrl.setRoot(CadastroUsuarioPage);
  }  
  }         
