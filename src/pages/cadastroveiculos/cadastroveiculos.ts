import { VeiculoService } from './../../services/veiculo-service';
import { VeiculosPage } from './../veiculos/veiculos';
import { Veiculo } from './../../model/veiculo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastroveiculos',
  templateUrl: 'cadastroveiculos.html',
  providers: [VeiculoService]
})
export class CadastroveiculoPage {

  public veiculo: Veiculo;
  public onCallback: Function;
  public edicao = false;
  public formCadVei: FormGroup;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public veiculoService: VeiculoService, public formBuilder: FormBuilder ) {

                this.formCadVei = this.formBuilder.group({
                  codigo: ['', Validators.required],                 
                  modelo: ['', Validators.compose([Validators.required])],
                  marca: ['', Validators.required],
                  ano: ['', Validators.required],
                  cor: ['',Validators.required],
                  chassi: ['', Validators.required],         
                  renavam: ['', Validators.required],
                  valor: ['', Validators.required]
                });

    this.navParams.get('callback');

    this.onCallback = this.navParams.get('callback'); 
    this.veiculo = this.navParams.get('veiculo');

    if(this.veiculo == null){
      this.veiculo = new Veiculo();
   }  else {
       this.edicao = true;
   }
 }

 salvar(){
  this.veiculoService.save(this.veiculo).subscribe((data : Veiculo) => {
    if(data !== null){
     this.navCtrl.setRoot(VeiculosPage);
  }
  });
}
 };
 
  


