import { Observable } from 'rxjs/Rx';
import { Veiculo } from './../model/veiculo';
import { AUTH } from './../app/app.constants';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';

@Injectable()
export class VeiculoService extends AbstractService<Veiculo>{

    constructor(protected http: Http    ){
        super(http);      
    }

    public getWebService(): string{
        return 'veiculos';
    }
    
    public listaveiculo(veiculo: Veiculo): Observable<Array<Veiculo>>{
        return this.http.post(this.urlWebSistema + "/listaveiculo" , veiculo).map(res => {
            return res.json();
        });
    }
    
};