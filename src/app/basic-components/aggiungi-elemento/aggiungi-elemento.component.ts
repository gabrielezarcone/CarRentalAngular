import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
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
  @Output() confermato = new EventEmitter();
  newItemFields: FormField[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    for (const key of Object.keys(this.newItem)){
      if (key !== 'id'){
        this.newItemFields.push(new FormField(key, key));
      }
    }
  }

  aggiungiItem(): void {
    const myModal = new Modal(document.getElementById('addItemModal'), {});
    myModal.toggle();
  }

  conferma(): void{
    this.confermato.emit();
  }
}
