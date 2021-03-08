import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../../../Model/User';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../Service/api-services/users.service';

@Component({
  selector: 'app-modifica-user',
  templateUrl: './modifica-user.component.html',
  styleUrls: ['./modifica-user.component.scss']
})
export class ModificaUserComponent implements OnInit {

  userForm = this.fb.group(new User());
  id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  onSubmit(): void {
    this.userService.update(this.id, this.userForm.value).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  getUser(): void{
    this.userService.get(this.id).subscribe(
      user => this.userForm.setValue(user)
    );
  }
}
