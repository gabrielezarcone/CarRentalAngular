import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Service/basic-services/AuthService/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.loggedUserRole().subscribe(
      ruolo => {
        if (ruolo.ruolo === 'ROLE_ADMIN'){
          this.router.navigateByUrl('/homeAdmin');
        }
        else if (ruolo.ruolo === 'ROLE_CUSTOMER'){
          this.router.navigateByUrl('/homeCustomer');
        }
        else {
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
