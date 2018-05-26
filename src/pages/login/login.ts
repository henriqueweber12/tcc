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

  //messageEmail = ""
  //messageSenha = "";
  //errorEmail = false;
  //errorSenha = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public usuarioService: UsuarioService) {

    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20),
        Validators.required])]
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
    this.navCtrl.push(CadastroUsuarioPage);
  }  
  }         

  //let { email, senha } = this.formLogin.controls;

 // if (!this.formLogin.valid) {
 //   if (!email.valid) {
 //     this.errorEmail = true;
 //     this.messageEmail = "Ops! Email inválido";
 //   } else {
 //     this.messageEmail = "";
 //   }

//    if (!senha.valid) {
//      this.errorSenha = true;
//      this.messageSenha ="A senha precisa ter de 6 a 20 caracteres"
//    } else {
//      this.messageSenha = "";
//    }
//  }
//  else {
   
  // }
 //   alert("Login Realizado");
//  }