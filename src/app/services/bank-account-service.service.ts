import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IBankAccount} from "../models/bankAccount";

@Injectable()
export class BankAccountService {

  private BankAccountURL = "http://localhost:8080/projekat/accounts";
 
     constructor(private http: Http) {
     }
 
     getBankAccount(): Observable<IBankAccount[]> {
         return this.http
             .get(this.BankAccountURL)
             .map((response) => {
                 return <IBankAccount[]>response.json();
             });
     }
}