import { Component } from "@angular/core";
import { LugaresService } from "../services/lugares.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-actualizar',
    templateUrl: './actualizar.component.html'
})

export class actualizarComponent {
    lugar: any = {}
    id = null

    constructor(private lugarService: LugaresService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id']
        lugarService.buscarLugar(this.id).subscribe( lugar => {
            this.lugar = lugar
        } )
    }

    guardarLugar() {
        this.lugarService.guardarLugar(this.lugar)
    }
    
}