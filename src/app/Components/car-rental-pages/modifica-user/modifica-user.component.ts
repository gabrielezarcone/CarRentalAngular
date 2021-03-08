import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../../../Model/User';

@Component({
  selector: 'app-modifica-user',
  templateUrl: './modifica-user.component.html',
  styleUrls: ['./modifica-user.component.scss']
})
export class ModificaUserComponent implements OnInit {

  user = new User(0, 'prova', '', undefined, false, '', '');
  userForm = this.fb.group(this.user);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.userForm.value);
  }
}
