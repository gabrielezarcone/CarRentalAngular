import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  user: User;
  modificaBtn: MyButtonConfig = new MyButtonConfig(
    'Modifica informazioni',
    'btn-primary',
    'pen'
  );

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
  }

}
