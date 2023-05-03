import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  constructor(private http:HttpClient ){
    
  }

  ngOnInit(){
   
  }

  //cadastrar
  cadastrar(){
    const dados = {
      cursos: {
        nome: 'Fulano',
        data_nascimento: '1990-01-01',
        cpf: '12345678901',
        email: 'fulano@example.com',
        celular: '11999999999',
        aceite_termos: true
      }
    };
  
    this.http.post('./php/cadastrar.php', dados).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

}
