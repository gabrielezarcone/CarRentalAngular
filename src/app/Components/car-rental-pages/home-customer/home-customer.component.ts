import { Component, OnInit } from '@angular/core';
import {User} from '../../../Model/User';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';
import {Prenotazione} from '../../../Model/Prenotazione';
import {FormField} from '../../../basic-components/form-modifica/Config Classes/FormField';
import {Modal} from 'bootstrap';
import {PrenotazioneService} from '../../../Service/api-services/prenotazione.service';
import {Router} from '@angular/router';
import {AggiungiBtnConfig} from '../../../basic-components/aggiungi-elemento/Config Classes/AggiungiBtnConfig';

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
  modal;
  aggiungiBtn: AggiungiBtnConfig = new AggiungiBtnConfig(
    'bookmark-plus',
    (nuovaPrenotazione) => this.addPrenotazione(nuovaPrenotazione)
  );


  constructor(
    private auth: AuthService,
    private prenotazioneService: PrenotazioneService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.loggedUser().subscribe(
      user => this.user = user
    );
    this.modal = new Modal(document.getElementById('modificaPrenotazioneModal'), {});
  }

  apriModalModifica(prenotazione: Prenotazione): void {
    this.prenotazioneScelta = {...prenotazione};
    this.toggleModal();
  }

  confermaModifica(prenotazioneModificata: Prenotazione): void {
    console.log(prenotazioneModificata);
    this.prenotazioneService.update(prenotazioneModificata.id, prenotazioneModificata).subscribe(
      _ => {
        this.toggleModal();
        this.router.navigateByUrl('/home');
      },
      error => console.error(error)
    );
  }

  toggleModal(): void{
    this.modal.toggle();
  }

  addPrenotazione(nuovaPrenotazione): void{
    nuovaPrenotazione.stato = 'PENDING';
    nuovaPrenotazione.user = this.user.id;
    this.prenotazioneService.create(nuovaPrenotazione).subscribe(
      _ => {
        this.toggleModal();
        this.router.navigateByUrl('/home');
      },
      error => console.error(error)
    );
  }
}
