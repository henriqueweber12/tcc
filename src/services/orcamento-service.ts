import { Orcamento } from './../model/orcamento';
import { AUTH } from './../app/app.constants';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';

@Injectable()
export class OrcamentoService extends AbstractService<Orcamento>{

    constructor(protected http: Http    ){
        super(http);      
    }

    public getWebService(): string{
        return 'orcamentos';
    }
    
    
};