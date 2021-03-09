import { Component, OnInit } from '@angular/core';
import {Modal} from 'bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../Service/api-services/users.service';
import {User} from '../../../Model/User';

@Component({
  selector: 'app-elimina-user',
  templateUrl: './elimina-user.component.html',
  styleUrls: ['./elimina-user.component.scss']
})
export class EliminaUserComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Recupero user -----------------------------------------
    this.userService.get(this.id).subscribe(
      data => this.user = data
    );
    // Apre Modal --------------------------------------------
    const myModal = new Modal(document.getElementById('myModal'), {
      backdrop: false,
      keyboard: false
    });
    myModal.toggle();
  }

  eliminaUser(): void {
    this.userService.delete(this.id).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.router.navigate(['/homeAdmin'], {relativeTo: this.route});
  }
}
