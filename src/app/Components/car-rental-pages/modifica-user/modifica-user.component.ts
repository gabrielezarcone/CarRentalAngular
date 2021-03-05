import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modifica-user',
  templateUrl: './modifica-user.component.html',
  styleUrls: ['./modifica-user.component.scss']
})
export class ModificaUserComponent implements OnInit {

  userForm = new  FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    birthDate: new FormControl(''),
    deleted: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.userForm.value);
  }
}
