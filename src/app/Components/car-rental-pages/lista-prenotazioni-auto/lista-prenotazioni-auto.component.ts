import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prenotazioni-auto',
  templateUrl: './lista-prenotazioni-auto.component.html',
  styleUrls: ['./lista-prenotazioni-auto.component.scss']
})
export class ListaPrenotazioniAutoComponent implements OnInit {

  tipoListaPrenotazioni = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}
