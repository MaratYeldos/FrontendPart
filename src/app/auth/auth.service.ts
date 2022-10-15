import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignupInfo } from './signup-info';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //login
  private loginUrl = 'http://localhost:8080/api';
  private signupUrl = 'http://localhost:8080/api';

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
