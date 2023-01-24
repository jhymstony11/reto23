import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  // INSTACIAR EL SERVICIO AUTENTICACION Y EL ROUTER

  constructor(private autenticacion: AutenticacionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Comporbar si el suuario iniiio sesion

    if(this.autenticacion.isLoggedIn(state.url)){
      return true;
    } 
    
    this.router.navigate(['/login']);
    return false;

  }
  
}
