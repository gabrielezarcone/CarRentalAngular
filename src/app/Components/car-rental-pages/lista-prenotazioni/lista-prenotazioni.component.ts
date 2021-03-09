import { Component, OnInit } from '@angular/core';
import {Prenotazione} from '../../../Model/Prenotazione';
import {PrenotazioneService} from '../../../Service/api-services/prenotazione.service';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {ActivatedRoute} from '@angular/router';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';

@Component({
  selector: 'app-lista-prenotazioni',
  templateUrl: './lista-prenotazioni.component.html',
  styleUrls: ['./lista-prenotazioni.component.scss']
})
export class ListaPrenotazioniComponent implements OnInit {
  prenotazioniUtente: Prenotazione[];
  id = +this.route.snapshot.paramMap.get('id');
  // Tabella ******************************************
  private headers: MyHeaders[] = [
    new MyHeaders('inizio', 'Inizio'),
    new MyHeaders('fine', 'Fine'),
    new MyHeaders('stato', 'Stato'),
    new MyHeaders('auto', 'Auto')
  ];
  private order = new MyOrder('inizio', 'asc');
  crudBtns: MyButtonConfig[] = [
    new MyButtonConfig('Approva', 'btn-primary', 'check2'),
    new MyButtonConfig('Rifiuta', 'btn-dark', 'trash')
  ];
  tableConfig = new TableConfig(this.headers, this.order);
  // ****************************************** Tabella

  constructor(
    private prenotazioneService: PrenotazioneService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prenotazioneService.getByUser(this.id).subscribe(
      data => this.prenotazioniUtente = data
    );
  }

}
