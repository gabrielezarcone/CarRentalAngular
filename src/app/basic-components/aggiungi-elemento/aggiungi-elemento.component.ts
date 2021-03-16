import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {AggiungiBtnConfig} from './Config Classes/AggiungiBtnConfig';
import {Modal} from 'bootstrap';
import {FormField} from '../form-modifica/Config Classes/FormField';

@Component({
  selector: 'app-aggiungi-elemento',
  templateUrl: './aggiungi-elemento.component.html',
  styleUrls: ['./aggiungi-elemento.component.scss']
})
export class AggiungiElementoComponent implements OnInit, OnChanges {
  @Input() config: AggiungiBtnConfig;
  @Input() newItem: any;
  newItemFields: FormField[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.newItem){
      for (const key of Object.keys(this.newItem)){
        if (key !== 'id' && !this.config.removeFields.includes(key)){
          this.newItemFields.push(new FormField(key, key));
        }
      }
    }
  }

  aggiungiItem(): void {
    const myModal = new Modal(document.getElementById('addItemModal'), {});
    myModal.toggle();
  }

  conferma(item): void{
    this.config.aggiungiItem(item);
  }
}
