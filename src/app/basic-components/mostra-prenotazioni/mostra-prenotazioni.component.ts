import {Component, Input, OnChanges} from '@angular/core';
import {Prenotazione} from '../../Model/Prenotazione';
import {MyHeaders, MyOrder, TableConfig} from '../table/table.component';
import {MyButtonConfig} from '../my-button/my-button.component';
import {PrenotazioneService} from '../../Service/api-services/prenotazione.service';

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
  // Tabella ******************************************
  private headers: MyHeaders[]; // Definiti da ngOnInit poichè usano this.tipo
  private order = new MyOrder('inizio', 'asc');
  crudBtns: MyButtonConfig[] = [];
  tableConfig: TableConfig;
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
        data => this.prenotazioni = data
      );
    }
    else if (this.tipo === 'auto'){
      this.prenotazioneService.getByAuto(this.itemId).subscribe(
        data => this.prenotazioni = data
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
  }

  condizioneVisibilita(row: any): boolean{
    return row.stato === 'PENDING';
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

}
