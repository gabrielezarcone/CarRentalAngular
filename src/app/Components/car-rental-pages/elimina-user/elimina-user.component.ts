import { Component, OnInit } from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-elimina-user',
  templateUrl: './elimina-user.component.html',
  styleUrls: ['./elimina-user.component.scss']
})
export class EliminaUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myModal = new Modal(document.getElementById('myModal'), {
      backdrop: 'static',
      keyboard: false
    });
    myModal.toggle();
  }

}
