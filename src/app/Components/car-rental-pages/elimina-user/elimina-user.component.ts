import { Component, OnInit } from '@angular/core';
import {Modal} from 'bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../Service/api-services/users.service';
import {User} from '../../../Model/User';
import {ModalConfig} from '../../../basic-components/modal-conferma/Config Classes/ModalConfig';

@Component({
  selector: 'app-elimina-user',
  templateUrl: './elimina-user.component.html',
  styleUrls: ['./elimina-user.component.scss']
})
export class EliminaUserComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  user = new User();
  modalConfig: ModalConfig;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Recupero user -----------------------------------------
    this.userService.get(this.id).subscribe(
      data => {
        this.user = data;
        this.modalConfig = new ModalConfig(
          'Eliminazione utente ' + this.user.username,
          'Si vuole veramente eliminare l\'utente ' + this.user.username,
          () => this.eliminaUser(),
          () => this.tornaAllaHome()
        );
      }
    );
  }

  eliminaUser(): void {
    this.userService.delete(this.id).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.tornaAllaHome();
  }

  tornaAllaHome(): void{
    this.router.navigate(['/homeAdmin'], {relativeTo: this.route});
  }
}
