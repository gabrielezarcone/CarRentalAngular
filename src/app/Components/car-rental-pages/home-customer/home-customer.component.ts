import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.scss']
})
export class HomeCustomerComponent implements OnInit {
  user: User = new User( // hardcoded temporaneamente finchè non viene creato il login
    2,
    'Nome',
    'Cogonme',
    undefined,
    false,
    'prova1'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
