import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  lugar:any = {}

  constructor(private lugaresServices: LugaresService){
    
  }

  guardarLugar() {
    this.lugar.id = Date.now()
    this.lugaresServices.guardarLugar(this.lugar)
    alert('negocio guardado con exito')
    this.lugar = {}
  }

 
  
}
