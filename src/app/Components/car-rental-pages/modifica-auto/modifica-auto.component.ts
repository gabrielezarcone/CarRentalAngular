import { Component, OnInit } from '@angular/core';
import {Auto} from '../../../Model/Auto';
import {AutoService} from '../../../Service/api-services/auto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormField} from '../../../basic-components/form-modifica/Config Classes/FormField';

@Component({
  selector: 'app-modifica-auto',
  templateUrl: './modifica-auto.component.html',
  styleUrls: ['./modifica-auto.component.scss']
})
export class ModificaAutoComponent implements OnInit {

  auto: Auto;
  id =  +this.route.snapshot.paramMap.get('id');
  formFields = [
    new FormField('costruttore', 'Costruttore', 'text'),
    new FormField('modello', 'Modello', 'text'),
    new FormField('immatricolazione', 'Immatricolazione', 'date'),
    new FormField('tipologia', 'Tipologia', 'text'),
    new FormField('targa', 'Targa', 'text')
  ];

  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAuto();
  }

  private getAuto(): void {
    this.autoService.get(this.id).subscribe(
      auto => this.auto = auto,
      error => console.error(error)
    );
  }

  onSubmit(autoUpdated: Auto): void {
    this.autoService.update(this.id, autoUpdated).subscribe(
      data => console.log(data),
      error => console.error(error),
    );
    this.router.navigate(['/auto'], {relativeTo: this.route});
  }
}
