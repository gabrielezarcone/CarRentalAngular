import { Component, OnInit } from '@angular/core';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';
import {AutoService} from '../../../Service/api-services/auto.service';
import {Auto} from '../../../Model/Auto';
import {AggiungiBtnConfig} from '../../../basic-components/aggiungi-elemento/Config Classes/AggiungiBtnConfig';

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {
  // Tabella ******************************************
  headers: MyHeaders[] = [
    new MyHeaders('costruttore', 'Costruttore'),
    new MyHeaders('modello', 'Modello'),
    new MyHeaders('immatricolazione', 'Immatricolazione'),
    new MyHeaders('targa', 'Targa'),
    new MyHeaders('tipologia', 'Tipologia')
  ];
  // ------------------------------
  order: MyOrder = new MyOrder('username', 'asc');
  // ------------------------------
  tableConfig = new TableConfig(this.headers, this.order);
  tableData: Auto[];
  tableCrudBtns: MyButtonConfig[] = [
    new MyButtonConfig('Modifica', 'btn-success', 'pen', (auto) => '/modifica/auto/' + auto.id),
    new MyButtonConfig('Elimina', 'btn-danger' , 'x-octagon', (auto) => '/elimina/auto/' + auto.id),
    new MyButtonConfig('Prenotazioni', 'btn-primary' , 'list', (auto) => '/prenotazioni/auto/' + auto.id)
  ];
  // ****************************************** Tabella
  newAutoBtn: AggiungiBtnConfig = new AggiungiBtnConfig('plus-square', (newAuto) => this.aggiungiAuto(newAuto));

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getAll().subscribe(
      data => this.tableData = data
    );
  }

  aggiungiAuto(newAuto): void {
    this.autoService.create(newAuto).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
