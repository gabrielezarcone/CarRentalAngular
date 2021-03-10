import {Component, Input, OnInit} from '@angular/core';
import {AggiungiBtnConfig} from './Config Classes/AggiungiBtnConfig';

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
    console.log('aggiunge item');
  }
}
