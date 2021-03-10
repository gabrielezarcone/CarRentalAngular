import {Component, Input, OnInit} from '@angular/core';
import {AggiungiBtnConfig} from './Config Classes/AggiungiBtnConfig';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-aggiungi-elemento',
  templateUrl: './aggiungi-elemento.component.html',
  styleUrls: ['./aggiungi-elemento.component.scss']
})
export class AggiungiElementoComponent implements OnInit {
  @Input() config: AggiungiBtnConfig;

  constructor() { }

  ngOnInit(): void {
  }

  aggiungiItem(): void {
    const myModal = new Modal(document.getElementById('addItemModal'), {});
    myModal.toggle();
  }
}
