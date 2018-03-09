import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ICustomer } from "../models/customer";

@Injectable()
export class CustomerService {

  private CustomerURL = "http://localhost:8080/projekat/customers";
 
     constructor(private http: Http) {
     }
 
     getCustomer(): Observable<ICustomer[]> {
         return this.http
             .get(this.CustomerURL)
             .map((response) => {
                 return <ICustomer[]>response.json();
             });
     }
}