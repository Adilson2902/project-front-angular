import { Component } from '@angular/core';
import { CadastroService } from 'src/service/cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-front'
  name = ""
  email = ""
  phone = "";


  constructor(private service_cad:CadastroService){

  }

  cadastrar(){
    this.service_cad.cadastrar( this.name,this.email,this.phone).subscribe((result) => {

      console.log("Cadastrado com sucesso")

      alert("Cadastrado com sucesso")
       this.name = ""
       this.email = ""
       this.phone = ""

    },(error) =>{

      console.log(error)
    })


  }
}
