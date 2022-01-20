import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private urlEndPoint:string='http://localhost:8080/api/custumer';

  constructor( private http: HttpClient ) { }

 getCoutumers():Observable<Customer[]>{

    return this.http.get<Customer[]>(this.urlEndPoint);
      
  }
}
