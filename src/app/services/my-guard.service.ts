import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AutorizacionService } from "./autorizacion.service";

@Injectable()

export class MyGuard implements CanActivate {
    isLogged = false;

    constructor( private autorizationService: AutorizacionService, router: Router ) {
        this.autorizationService.isLogged().subscribe(result =>{
            if (result && result.uid) {
                this.isLogged = true
            }else {
                this.isLogged = false
            }
            
        }, err=>{
            this.isLogged = false
        })
    }

    canActivate () {
        return this.isLogged
    }

}