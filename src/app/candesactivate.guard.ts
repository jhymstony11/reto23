import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Crear una Interfaz para CanDeactivate
interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CandesactivateGuard implements CanDeactivate<Desactivar> {
  canDeactivate(component: Desactivar) {
    return component.SalirDeRuta ? component.SalirDeRuta(): true;
  }  
}
