import { Injectable } from "@angular/core";

@Injectable()

export class LugaresService {
    lugares:any = [
        {description: 'lorem ipsum', id:1, plan: "basic", distancia: '12 km', active: true, nombre: "Veterinaria huellitas"},
        {description: 'lorem ipsum', id:2, plan: "full", distancia: '10 km', active: false, nombre: "Floristeria rosas rojas"},
        {description: 'lorem ipsum', id:3, plan: "free", distancia: '23 km', active: true, nombre: "donas redondas"}
      ]

    /**
     * GetLugares
     */
    public getLugares() {
        return this.lugares
    }

    public buscarLugar (id) {
        return this.lugares.filter( (lugar) => {
          return lugar.id == id
        })[0] || null;
      }
}