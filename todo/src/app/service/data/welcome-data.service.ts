import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeAuthenticationService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute")
  }
  //http://localhost:8080/hello-world/path-variable/chloe
  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      // { headers }
    );
    // console.log("Execute")
  }

  //Access to XMLHttpRequest at 'http://localhost:8080/users/chloe/todos' from origin 
  //'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
  //on the requested resource.

  // createBasicAuthenticationHttpHeader() {
  //   let username = "chloe"
  //   let password = "dummy"
  //   let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString;
  // }

}
