import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    console.log('AuthGuard');
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.usuarioService.usuarioEstaAutenticado()){
      return true;
    } 

    this.router.navigate(['']);

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se usuário pode carregar o  módulo');

      return this.verificarAcesso();
    }

}
