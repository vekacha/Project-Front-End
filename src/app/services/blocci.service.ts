import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IBlocchi } from "../models/blocchi";

@Injectable()
export class BlocchiService {

  private BlocchiURL = "http://localhost:8080/projekat/setblocchi";
 
     constructor(private http: Http) {
     }
 
     getBlocchi(userId, office, bill ): Observable<IBlocchi[]> {
        return this.http.post(this.BlocchiURL, {
                "serviceInput": {
                "ahHeaderType": "F",
                "ahUserId": userId,
                "ahDomainId": "12",
                "ahNodeId": "110",
                "ahCodCentro": "9498",
                "ahChannelType": "107"
            },
            "sportello": office,
            "conto": bill
        }
         ).map((response) => {
            return <IBlocchi[]>response.json();
        });
    }
}