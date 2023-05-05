import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'; 
import { Curso } from './cadastro';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

    //URL BASE
    url = 'http://localhost:8081/api/php/';

    vetor:Curso[] = [];

  constructor(private http: HttpClient) { }
  

 //cadastrar
 cadastrar(c:Curso):Observable<Curso[]>{
  return this.http.post(this.url+"cadastrar",{cursos:c}).pipe(
    map((res: any )=> {
      this.vetor.push(res['cursos']);
      return this.vetor;
    })
  )
}


}
