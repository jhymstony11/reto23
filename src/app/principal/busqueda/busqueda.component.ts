import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  myControl = new FormControl('');
options: string[] = ['One', 'Two', 'Three'];
  // constructor(private userService: UserserviceService){}

  // resultado = true;
  // vista = false;
  // user!: Users | null;
  
  
  // getUserID(id: string){
  //   this.resultado = true;
  //   this.user = null;
  //   this.userService.getUserId(id).subscribe({
  //     next: (usuario: Users) => {this.user = usuario;  this.vista = false;}
  //     ,
  //     error: (e) => {console.error(e); this.resultado = false;},
  //     complete: () => console.info("La API devolvio un registro")
  //   });
  // }

  // ngOnInit(){
  //   this.resultado = true;
  //   this.vista = true;
  // }
  
}
