import { Observable } from 'rxjs/Rx';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()
export abstract class AbstractService<T>{

  protected protocolo: string = 'http';
  protected ip: string = 'localhost';
  protected porta: string = '8080';
  protected contextSistema: string = 'VendadeCarros/rest/';
  protected urlSistema: string = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextSistema;
  protected urlWebSistema:string = '';

  constructor(protected http: Http) {
    this.urlWebSistema = this.urlSistema + this.getWebService();
  }

  public abstract getWebService():string;

  public findAll(): Observable<Array<T>> {
    return this.http.get(this.urlWebSistema).map(res => {
      return res.json();
    });
  }
 
  public findById(id: number): Observable<T> {
    return this.http.get(this.urlWebSistema + "/" + id).map(res => {
      return res.json();
    });
  }

  public remove(id: number): Observable<T> {
    return this.http.delete(this.urlWebSistema + "/" + id).map(res => {
      return res.json();
    });
  }

  public save(obj: T): Observable<T> {
    console.log(obj);
    return this.http.post(this.urlWebSistema + "/salvar", obj).map(res => {
      return res.json();
    }).pipe(
      catchError((err) => {
        console.error(err);
        return err;
      })
    );
  }

}
