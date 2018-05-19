import { LoginPage } from './../login/login';
import { Usuario } from './../../model/usuario';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/usuario-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastrousuario',
  templateUrl: 'cadastrousuario.html',
  providers : [UsuarioService]
})
export class CadastroUsuarioPage {

public usuario : Usuario;
public onCallback: Function;
  public edicao = false;
  public formCadUsu: FormGroup;

  constructor(public navCtrl: NavController,  
              public navParams: NavParams, 
              public usuarioService: UsuarioService, public formBuilder: FormBuilder,) {

                this.formCadUsu = this.formBuilder.group({
                  tipo: ['', Validators.required],                 
                  nome: ['', Validators.compose([Validators.required])],
                  datanasc: ['', Validators.required],
                  genero: ['', Validators.required],
                  email: ['',Validators.required],
                  senha: ['', Validators.required]         
                });

    this.navParams.get('callback');

    this.onCallback = this.navParams.get('callback'); 
    this.usuario = this.navParams.get('usuario');

    if(this.usuario == null){
      this.usuario = new Usuario();
   }  else {
       this.edicao = true;
   }
 }

 salvar(){ 
   this.usuarioService.save(this.usuario).subscribe((data : Usuario) => {
     if(data !== null){
       this.navCtrl.setRoot(LoginPage);
     }
   });
 }
}


