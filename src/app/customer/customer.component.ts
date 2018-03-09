import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/customer';
import { CustomerService } from '../services/customer.service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  _customerArray: ICustomer[];

  constructor(private CustomerService: CustomerService) { }

  getPosts(): void {
    this.CustomerService.getCustomer()
        .subscribe(
            resultArray => this._customerArray = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
