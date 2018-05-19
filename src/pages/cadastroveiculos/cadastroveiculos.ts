import { VeiculoImagem } from './../../model/veiculoimagem';
import { VeiculoService } from './../../services/veiculo-service';
import { VeiculosPage } from './../veiculos/veiculos';
import { Veiculo } from './../../model/veiculo';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-cadastroveiculos',
  templateUrl: 'cadastroveiculos.html',
  providers: [VeiculoService, Camera]
})
export class CadastroveiculoPage {

  public veiculo: Veiculo;
  public onCallback: Function;
  public edicao = false;
  public formCadVei: FormGroup;
  public listaImagens: Array<VeiculoImagem>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public veiculoService: VeiculoService, public formBuilder: FormBuilder,            
              private camera: Camera ) {

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

abrirCamera(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    let veiculoImagem = new VeiculoImagem();
    veiculoImagem.imagem = base64Image;
    this.listaImagens.push(veiculoImagem);
   }, (err) => {
    // Handle error
   });
 }


 };
 
  


