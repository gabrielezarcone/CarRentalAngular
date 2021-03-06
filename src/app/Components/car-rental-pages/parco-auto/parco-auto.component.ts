import { Component, OnInit } from '@angular/core';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';
import {AutoService} from '../../../Service/api-services/auto.service';
import {Auto} from '../../../Model/Auto';
import {AggiungiBtnConfig} from '../../../basic-components/aggiungi-elemento/Config Classes/AggiungiBtnConfig';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';

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
  tableCrudBtns: MyButtonConfig[] = [];
  // ****************************************** Tabella
  newAutoBtn: AggiungiBtnConfig = undefined;

  constructor(
    private autoService: AutoService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.autoService.getAll().subscribe(
      data => this.tableData = data
    );
    this.auth.isAdmin().subscribe(
      isAdmin => {
        if (isAdmin){
          this.newAutoBtn = new AggiungiBtnConfig('plus-square', (newAuto) => this.aggiungiAuto(newAuto));
          this.tableCrudBtns = [
            new MyButtonConfig('', 'btn-success', 'pen', (auto) => '/modifica/auto/' + auto.id),
            new MyButtonConfig('', 'btn-danger' , 'x-octagon', (auto) => '/elimina/auto/' + auto.id),
            new MyButtonConfig('', 'btn-primary' , 'list', (auto) => '/prenotazioni/auto/' + auto.id)
          ]
        }
      }
    );
  }

  aggiungiAuto(newAuto): void {
    this.autoService.create(newAuto).subscribe(
      data => window.location.reload(),
      error => console.error(error)
    );
  }
}
