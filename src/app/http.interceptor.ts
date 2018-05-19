import { AUTH } from './app.constants';
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { AbstractEntity } from '../model/abstractentity';


@Injectable()
export class InterceptorHttp extends Http {

    constructor(private backend: ConnectionBackend,
                private defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(this.updateBaseUrl(url), this.getRequestOptionsArgs(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(this.updateBaseUrl(url), this.validarObjeto(body), this.getRequestOptionsArgs(options));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(this.updateBaseUrl(url), this.validarObjeto(body), this.getRequestOptionsArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(this.updateBaseUrl(url), this.getRequestOptionsArgs(options));
    }

    private updateBaseUrl(url: string): string {
        if (url.indexOf('http://') != -1) {
            return url;
        } else {
            // return BASE_URL + url;
        }
    }

    private getRequestOptionsArgs(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        if (AUTH != null) {
            options.headers.set('Authorization', AUTH.token);
        }

        return options;
    }

    private validarObjeto(body: any) {
        let obj = '';
        if (body != null && ( (body instanceof AbstractEntity ))) {
            // obj = JSON.stringify(Object.assign(body), Object.keys(body.constructor.prototype));

            obj = JSON.stringify(body);
            Object.keys(body).filter(key => key[0] === "_").forEach(key => {
                obj = obj.replace(key, key.substring(1));
            })
        }else if ( typeof body == 'object'){
            obj = JSON.stringify(body);
        } else {
            obj = body;
        }
        return obj;
    }
}
