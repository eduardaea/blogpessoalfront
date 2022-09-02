import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${this.baseUrl}usuarios/logar`, userLogin)
  }

  cadastrar(user:User):Observable<User>{
      return this.http.post<User>(`${this.baseUrl}usuarios/cadastrar`,user)
  }
}
