import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  apiUser = environment.apiURL + 'users/';

  // Metodos GET para obtener datos de la API users

  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUser);
  }

  getUserId(userId: string): Observable<Users> {
    const url = this.apiUser + userId;
    return this.http.get<Users>(url);
  }

  // Metodo POSt para enviar datos a la API users

  postUser(usuario: Users): Observable<Users>{
    return this.http.post<Users>(this.apiUser, usuario);
  }

  // Metodo GET para el Interceptor
  getUsersAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser, {observe: 'response'});
  }


}
