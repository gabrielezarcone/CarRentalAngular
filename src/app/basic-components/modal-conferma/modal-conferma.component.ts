import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ModalConfig} from './Config Classes/ModalConfig';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-modal-conferma',
  templateUrl: './modal-conferma.component.html',
  styleUrls: ['./modal-conferma.component.scss']
})
export class ModalConfermaComponent implements OnChanges{
  @Input() modal: ModalConfig;

  constructor() { }

  ngOnChanges(): void {
    // Apre Modal --------------------------------------------
    const myModal = new Modal(document.getElementById('myModal'), {
      backdrop: false,
      keyboard: false
    });
    myModal.toggle();
  }

}
