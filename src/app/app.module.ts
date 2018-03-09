import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { BankAccountService } from './services/bank-account-service.service';
import { HeaderComponent } from './header/header.component';
import { BankComponent } from './bank/bank.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './services/customer.service.service';
import { BlocchiComponent } from './blocchi/blocchi.component';
import { BlocchiService } from './services/blocci.service';

const appRoutes: Routes = [
  { path: '', component: BankComponent },
  { path: 'bankAccount', component: BankAccountComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'blocchi', component: BlocchiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HeaderComponent,
    BankComponent,
    CustomerComponent,
    BlocchiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BankAccountService, CustomerService, BlocchiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
