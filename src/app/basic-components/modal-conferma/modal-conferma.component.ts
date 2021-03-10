import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ModalConfig} from './Config Classes/ModalConfig';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-modal-conferma',
  templateUrl: './modal-conferma.component.html',
  styleUrls: ['./modal-conferma.component.scss']
})
export class ModalConfermaComponent implements OnChanges{
  @Input() modal: ModalConfig;
  @Output() confermato = new EventEmitter<any>();
  @Output() rifiutato = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(): void {
    // Apre Modal --------------------------------------------
    const myModal = new Modal(document.getElementById('myModal'), {
      backdrop: false,
      keyboard: false
    });
    myModal.toggle();
  }

  conferma(): void{
    this.confermato.emit();
  }
  rifiuta(): void{
    this.rifiutato.emit();
  }

}
