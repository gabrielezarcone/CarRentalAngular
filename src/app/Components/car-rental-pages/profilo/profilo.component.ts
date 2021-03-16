import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';
import {Router} from '@angular/router';

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
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
  }

  modificaUser(): void {
    this.router.navigateByUrl('/modifica/user', {state: {id: this.user.id}});
  }
}
