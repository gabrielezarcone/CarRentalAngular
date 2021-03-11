import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-prenotazioni-auto',
  templateUrl: './lista-prenotazioni-auto.component.html',
  styleUrls: ['./lista-prenotazioni-auto.component.scss']
})
export class ListaPrenotazioniAutoComponent implements OnInit {

  tipoListaPrenotazioni = 'auto';
  id = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
