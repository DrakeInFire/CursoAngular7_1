import { Component, OnInit } from '@angular/core';
import { TarjetaService } from './tarjeta.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(private VM: TarjetaService) { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-tarjetas-add',
  templateUrl: './tarjetas.add.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasAddComponent implements OnInit {

  constructor(private vm: TarjetaService) { }

  public get VM(){return this.vm;}

  ngOnInit() {
    this.vm.add();
  }


}

@Component({
  selector: 'app-tarjetas-list',
  templateUrl: './tarjetas.list.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasListComponent implements OnInit {

  constructor(private vm: TarjetaService) { }

  public get VM(){return this.vm;}

  ngOnInit() {
    this.vm.list();
  }

}

export const TARJETA_COMPONENT=[TarjetasComponent,TarjetasAddComponent,TarjetasListComponent ]
