import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './cadastro';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';                                      

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
  cadastrar(){};

};
