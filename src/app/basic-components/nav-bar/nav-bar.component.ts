import {Component, Input, OnInit} from '@angular/core';
import {NavBarElement} from './ConfigClasses/NavBarElement';
import {MyButtonConfig} from '../my-button/my-button.component';
import {AuthService} from '../../Service/basic-services/AuthService/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navElements: NavBarElement[];
  @Input() title: string;
  btnConfig: MyButtonConfig = new MyButtonConfig(
    'Log Out',
    'btn-danger',
    'box-arrow-rigth'
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
