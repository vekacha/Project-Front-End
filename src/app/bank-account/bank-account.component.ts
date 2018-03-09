import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../services/bank-account-service.service';
import { IBankAccount} from "../models/bankAccount";


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  _bankArray: IBankAccount[];

  constructor(private bankAccountService: BankAccountService) { }

  getPosts(): void {
    this.bankAccountService.getBankAccount()
        .subscribe(
            resultArray => this._bankArray = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
