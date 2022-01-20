import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private urlEndPoint:string='http://localhost:8080/api/custumer';

  constructor( private http: HttpClient ) { }

 getCoutumers():Observable<Customer[]>{

    return this.http.get(this.urlEndPoint).pipe(

      
      map(response => response as Customer[])

    );
      
  }
}
