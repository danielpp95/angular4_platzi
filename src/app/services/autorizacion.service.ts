import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import swal from "sweetalert2";
import { Router } from "@angular/router";

@Injectable()

export class AutorizacionService{

    err = err=>{
        swal({
            title: 'Error',
            text: err.message,
            type: 'error',
        })
    }

    constructor( 
        private angularFireAuth: AngularFireAuth,
        private router: Router
    ) {
        this.isLogged()
    }

    public logout() {
        this.angularFireAuth.auth.signOut()
    }

    public isLogged() {
        return this.angularFireAuth.authState
    }

    public login(email, pass) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass)
            .then(()=>{
                swal({
                    type: 'success',
                    title: 'Welcome',
                    text: 'Inicio de sesion satisfactorio',

                })
            })
            .catch(err=>{ this.err(err) })
    }

    public registro(email, pass) {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass)
            .then( response =>{
                swal({
                    title: 'Usuario registrado con exito',
                    type: 'success'
                  })
            })
            .catch(err=>{ this.err(err) })
    }
}