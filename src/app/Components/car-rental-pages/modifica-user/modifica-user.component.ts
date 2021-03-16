import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../../../Model/User';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../Service/api-services/users.service';
import { Location } from '@angular/common';
import {FormField} from '../../../basic-components/form-modifica/Config Classes/FormField';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';

@Component({
  selector: 'app-modifica-user',
  templateUrl: './modifica-user.component.html',
  styleUrls: ['./modifica-user.component.scss']
})
export class ModificaUserComponent implements OnInit {

  user: User;
  id = +this.route.snapshot.paramMap.get('id');
  formFields = [
    new FormField('username', 'Username', 'text'),
    new FormField('name', 'Nome', 'text'),
    new FormField('surname', 'Cognome', 'text')
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UsersService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  onSubmit(userUpdated: User): void {
    this.userService.update(this.id, userUpdated).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.location.back();
  }

  getUser(): void{
    if (this.id){
      this.userService.get(this.id).subscribe(
        user => this.user = user
      );
    }
    else {
      this.auth.loggedUser().subscribe(
        user => this.user = user
      );
    }
  }
}
