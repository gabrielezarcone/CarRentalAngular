import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.scss']
})
export class HomeCustomerComponent implements OnInit {
  user: User = new User();

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
  }

}
