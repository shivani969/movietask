import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  registerUser(body) {
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', body).pipe(map(data => {
      console.log("1", data)
    }))
  }
    loginUser(body){
     return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate',body).pipe(map(data =>{
        localStorage.setItem("logindata",JSON.stringify(data))
     console.log("1",data)
      }))
   }
    movies(body){
      return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies',body).pipe(map(data =>{
        console.log("1",data)
      }))
    }
    //  moviealbum(){
    //    return this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/ee').pipe(map(data =>{
    //      console.log("1",data)
    //    }))

    } 
  
