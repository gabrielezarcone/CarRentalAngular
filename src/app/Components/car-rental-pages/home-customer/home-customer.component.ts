import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';
import {Prenotazione} from '../../../Model/Prenotazione';
import {FormField} from '../../../basic-components/form-modifica/Config Classes/FormField';
import {Modal} from 'bootstrap';
import {PrenotazioneService} from '../../../Service/api-services/prenotazione.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.scss']
})
export class HomeCustomerComponent implements OnInit {
  user: User = new User();
  prenotazioneScelta: Prenotazione;
  fieldsPrenotazione: FormField[] = [
    new FormField('inizio', 'Inizio Prenotazione'),
    new FormField('fine', 'Fine Prenotazione'),
    new FormField('auto', 'Id Auto'),
  ];


  constructor(
    private auth: AuthService,
    private prenotazioneService: PrenotazioneService
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
  }

  apriModalModifica(prenotazione: Prenotazione): void {
    this.prenotazioneScelta = {...prenotazione};
    const myModal = new Modal(document.getElementById('modificaPrenotazioneModal'), {});
    myModal.toggle();
  }

  confermaModifica(prenotazioneModificata: Prenotazione): void {
    this.prenotazioneService.update(prenotazioneModificata.id, prenotazioneModificata);
  }
}
