import { Component, OnInit } from '@angular/core';
import {AutoService} from '../../../Service/api-services/auto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Auto} from '../../../Model/Auto';
import {ModalConfig} from '../../../basic-components/modal-conferma/Config Classes/ModalConfig';

@Component({
  selector: 'app-elimina-auto',
  templateUrl: './elimina-auto.component.html',
  styleUrls: ['./elimina-auto.component.scss']
})
export class EliminaAutoComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  auto = new Auto();
  modalConfig: ModalConfig;

  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.autoService.get(this.id).subscribe(
      data => {
        this.auto = data;
        this.modalConfig = new ModalConfig(
          'Eliminazione auto ' + this.auto.modello + ' ' + this.auto.costruttore,
          'Si vuole veramente eliminare l\'auto targata ' + this.auto.targa
        );
      }
    );
  }

  eliminaAuto(): void {
    this.autoService.delete(this.id).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.tornaAlleAuto();
  }

  tornaAlleAuto(): void{
    this.router.navigate(['/auto'], {relativeTo: this.route});
  }
}
