import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  baseUrl = "http://localhost:8080/"

  constructor( private http: HttpClient) {
   }

    getAllTema(): Observable<Tema[]>{

      const  token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }

      return this.http.get<Tema[]>(`${this.baseUrl}temas`,token)
    }

    getByIdTema(id:number): Observable<Tema>{
      const  token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      return this.http.get<Tema>(`${this.baseUrl}temas/${id}`,token)
    }

    postTema(tema:Tema): Observable<Tema>{
       const token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
     
      return this.http.post<Tema>(`${this.baseUrl}temas`,tema, token)
    }

    putTema(tema:Tema):Observable<Tema>{

        const token = {
          headers: new HttpHeaders().set('Authorization', environment.token)
        }

       return this.http.put<Tema>(`${this.baseUrl}temas`,tema, token)
    }


    deleteTema(id: number){
      const token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      this.http.delete(`${this.baseUrl}temas/${id}`,token)
    }
}
