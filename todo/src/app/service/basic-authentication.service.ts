import { API_URL } from './../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username: any, password: any) {
  //   console.log('before ' + this.isUserLoggedIn());
  //   if (username === "chloe" && password === "dummy") {
  //     sessionStorage.setItem('authenticateUser', username)
  //     console.log('after ' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }
  //remove user authentication token when user logs out.  
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }



  //Access to XMLHttpRequest at 'http://localhost:8080/users/chloe/todos' from origin 
  //'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
  //on the requested resource.

  // createBasicAuthenticationHttpHeader() {
  //   let username = "chloe"
  //   let password = "dummy"
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString;
}


export class AuthenticationBean {
  constructor(public message: string) { }
}
