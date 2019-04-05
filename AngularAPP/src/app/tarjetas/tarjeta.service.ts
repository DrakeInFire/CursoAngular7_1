import { Injectable } from '@angular/core';
import { RESTDAOService } from '../code-base/dao';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../common-app';
import { ModoCRUD } from '../code-base/tipos';

@Injectable({
  providedIn: 'root'
})
export class TarjetaDaoService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'tarjetas', { withCredentials: true });
  }
}

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  protected listado:Array<any>=null;
  protected elemento: any=null;
  protected modo: ModoCRUD = 'list';

  constructor(private dao:TarjetaDaoService,
      protected notify: NotificationService) { }


  public get Listado(){ return this.listado}
  public get Elemento(){ return this.elemento}
  public get Modo(){return this.modo}

  public list(){
      this.dao.query().subscribe(
        (data)=>{
          console.log(data);
          this.listado=data;
          this.modo = 'list';
        },
        err => this.notify.add(err.message)
      )
  }

  public add(){
    this.elemento={}
    this.modo = 'add';
  }
  public print(){
    console.log("VALOR->",this.elemento);
  }

}
