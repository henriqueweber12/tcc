import { AUTH } from './../app/app.constants';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract-service';

@Injectable()
export class UsuarioService extends AbstractService<Usuario>{

    constructor(protected http: Http    ){
        super(http);      
    }

    public getWebService(): string{
        return 'usuarios';
    }

    public logar(user: Usuario): Observable<Usuario>{
        let url = this.urlWebSistema + "/logar";
        return this.http.post(url, user).map(res => {
            if (res.text() !== null){
                let json = res.json();
                console.log(json);
                AUTH.token = json.token;
                return json;
            }
            return null;
        });
    }
    
}