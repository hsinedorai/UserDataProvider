import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

getUsers(){
  return this.http.get('https://reqres.in/api/users?page=2').pipe(
    map((response:any)=>response as any)
  );
}
getUserById(){
  return this.http.get('').pipe(
    map((response:any)=>response as any)
  );
}

}
