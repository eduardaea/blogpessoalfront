import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, baseUrl } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {


  constructor(private http: HttpClient) {
  }

  getToken():  {headers :HttpHeaders} {
    console.log(environment);
    const token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return token
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`${baseUrl}postagens/${id}`,this.getToken())
  }

  getAllpostagens(): Observable<Postagem[]> { 

    return this.http.get<Postagem[]>(`${baseUrl}postagens`, this.getToken())
  }

  postPostagem(post: Postagem): Observable<Postagem> {
    
    return this.http.post<Postagem>(`${baseUrl}postagens`, post,  this.getToken())
  }

  putPostagem(postagem:Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(`${baseUrl}postagens`,postagem, this.getToken())
  }

  deletePostagem(id:number):Observable<Postagem>{
   return this.http.delete<Postagem>(`${baseUrl}postagens/${id}`,this.getToken())
  }
}