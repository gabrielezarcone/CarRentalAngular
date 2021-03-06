import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Prenotazione} from '../../Model/Prenotazione';
import {MyHeaders, MyOrder, TableConfig} from '../table/table.component';
import {MyButtonConfig} from '../my-button/my-button.component';
import {PrenotazioneService} from '../../Service/api-services/prenotazione.service';
import {AggiungiBtnConfig} from '../aggiungi-elemento/Config Classes/AggiungiBtnConfig';

@Component({
  selector: 'app-mostra-prenotazioni',
  templateUrl: './mostra-prenotazioni.component.html',
  styleUrls: ['./mostra-prenotazioni.component.scss']
})
export class MostraPrenotazioniComponent implements OnChanges {
  @Input() tipo; // Valori possibili: user|auto. Viene indicato se devo mostrare le prenotazioni in base all'utente o all'auto
  prenotazioni: Prenotazione[];
  @Input() itemId: number;
  @Input() isAdmin = false;
  @Output() modificaPrenotazione = new EventEmitter();
  // Tabella ******************************************
  private headers: MyHeaders[]; // Definiti da ngOnInit poichè usano this.tipo
  private order = new MyOrder('inizio', 'asc');
  crudBtns: MyButtonConfig[] = [];
  tableConfig: TableConfig;
  @Input() aggiungiBtnConfig?: AggiungiBtnConfig = undefined;
  // ****************************************** Tabella

  constructor(
    private prenotazioneService: PrenotazioneService
  ) { }

  ngOnChanges(): void {
    // Imposta headers in base al tipo ------------------
    this.headers = [
      new MyHeaders('inizio', 'Inizio'),
      new MyHeaders('fine', 'Fine'),
      new MyHeaders('stato', 'Stato'),
      new MyHeaders(this.tipo === 'auto' ? 'user' : 'auto', this.tipo === 'auto' ? 'Utente' : 'Auto')
    ];
    this.tableConfig = new TableConfig(this.headers, this.order);
    // Recupera le prenotazioni in base al tipo ---------------
    if (this.tipo === 'user'){
      this.prenotazioneService.getByUser(this.itemId).subscribe(
        data => {
          if (data.length !== 0){
            this.prenotazioni = data;
          }
          else {
            this.prenotazioni = [new Prenotazione()];
          }
        }
      );
    }
    else if (this.tipo === 'auto'){
      this.prenotazioneService.getByAuto(this.itemId).subscribe(
        data => {
          if (data.length !== 0){
            this.prenotazioni = data;
          }
          else {
            this.prenotazioni = [new Prenotazione()];
          }
        }
      );
    }
    // Inserisce i CRUD buttons solo se isAdmin è true ---------------
    if (this.isAdmin){
      this.crudBtns = [
        new MyButtonConfig(
          'Approva',
          'btn-primary',
          'check2',
          undefined,
          (row) => this.approvaPrenotazione(row),
          (row: any) => this.condizioneVisibilita(row)),
        new MyButtonConfig(
          'Rifiuta',
          'btn-dark',
          'trash',
          undefined,
          (row) => this.rifiutaPrenotazione(row),
          (row: any) => this.condizioneVisibilita(row))
      ];
    }
    else {
      this.crudBtns = [
        new MyButtonConfig(
          'Modifica',
          'btn-warning',
          'pen',
          undefined,
          (row) => this.modifica(row) ,
          (row: any) => this.possibilitaModifica(row)
        )
      ];
    }
  }

  condizioneVisibilita(row: any): boolean{
    return row.stato === 'PENDING';
  }
  possibilitaModifica(row: any): boolean{
    const today = Date.now();
    const inizio = Date.parse(row.inizio);
    const dateDiff = Math.round((inizio - today) / (1000 * 60 * 60 * 24));
    return  dateDiff > 2;
  }

  approvaPrenotazione(prenotazione: Prenotazione): void{
    this.cambiaStato(prenotazione, 'APPROVATO');
  }
  rifiutaPrenotazione(prenotazione: Prenotazione): void{
    this.cambiaStato(prenotazione, 'RIFIUTATO');
  }
  cambiaStato(prenotazione: Prenotazione, stato: string): void{
    prenotazione.stato = stato;
    this.prenotazioneService.update(prenotazione.id, prenotazione).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  modifica(row): void{
    this.modificaPrenotazione.emit(row);
  }
}
