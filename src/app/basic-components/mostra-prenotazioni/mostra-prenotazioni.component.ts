import {Component, Input, OnInit} from '@angular/core';
import {Prenotazione} from '../../Model/Prenotazione';
import {MyHeaders, MyOrder, TableConfig} from '../table/table.component';
import {MyButtonConfig} from '../my-button/my-button.component';
import {PrenotazioneService} from '../../Service/api-services/prenotazione.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mostra-prenotazioni',
  templateUrl: './mostra-prenotazioni.component.html',
  styleUrls: ['./mostra-prenotazioni.component.scss']
})
export class MostraPrenotazioniComponent implements OnInit {
  @Input() tipo = ''; // Valori possibili: user|auto. Viene indicato se devo mostrare le prenotazioni in base all'utente o all'auto
  prenotazioni: Prenotazione[];
  id = +this.route.snapshot.paramMap.get('id');
  // Tabella ******************************************
  private headers: MyHeaders[] = [
    new MyHeaders('inizio', 'Inizio'),
    new MyHeaders('fine', 'Fine'),
    new MyHeaders('stato', 'Stato'),
    new MyHeaders(this.tipo === 'auto' ? 'user' : 'auto', this.tipo === 'auto' ? 'Utente' : 'Auto')
  ];
  private order = new MyOrder('inizio', 'asc');
  crudBtns: MyButtonConfig[] = [
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
  tableConfig = new TableConfig(this.headers, this.order);
  // ****************************************** Tabella

  constructor(
    private prenotazioneService: PrenotazioneService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.tipo === 'user'){
      this.prenotazioneService.getByUser(this.id).subscribe(
        data => this.prenotazioni = data
      );
    }
    else if (this.tipo === 'auto'){
      this.prenotazioneService.getByAuto(this.id).subscribe(
        data => this.prenotazioni = data
      );
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
