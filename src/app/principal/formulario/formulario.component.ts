import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService: UserserviceService){}

  
  // datos: Users = {id: '', name: '', username:''};
  
  // onSubmit(){
  //   this.userService.postUser(this.datos).subscribe(
  //     (usuario: Users)=>console.log(usuario)
  //   );
  // }
  
}
