import { Component, OnInit, Output } from '@angular/core';
import { IBlocchi } from '../models/blocchi';
import { BlocchiService } from '../services/blocci.service';

@Component({
  selector: 'app-blocchi',
  templateUrl: './blocchi.component.html',
  styleUrls: ['./blocchi.component.css']
})
export class BlocchiComponent implements OnInit {

  _blocchiArray: IBlocchi[];
  
  public userId;
  public office;
  public bill;

  constructor(private BlocchiService: BlocchiService) { }

  getPosts(): void {
    this.BlocchiService.getBlocchi(this.userId, this.office, this.bill)
        .subscribe(
            resultArray => this._blocchiArray = resultArray,
            error => console.log("Error :: " + error)
        )
  }

  ngOnInit(): void {
    //this.getPosts();
  }

  sendRequest(){
    this.getPosts();
  }

}
