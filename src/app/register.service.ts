import { Injectable } from '@angular/core';
import { Register } from './register';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(protected http:HttpClient) {}
  saveRegister(register:any) {
  return this.http.post("http://localhost:3000/users",register);
   }
   getAllUsers(register:any):any {
    return this.http.get("http://localhost:3000/users");
  }
}
