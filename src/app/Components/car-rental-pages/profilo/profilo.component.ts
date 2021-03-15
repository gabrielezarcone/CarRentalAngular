import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  user: User;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
  }

}
