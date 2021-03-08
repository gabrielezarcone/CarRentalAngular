import {Component, OnInit} from '@angular/core';
import {NavBarElement} from './basic-components/nav-bar/ConfigClasses/NavBarElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appTitle = 'CarRental';
  navElements: NavBarElement[] = [
    new NavBarElement('Home', '/homeAdmin'),
    new NavBarElement('Auto', '#'),
    new NavBarElement('Profilo', '#')
  ];
  constructor(){}

  ngOnInit(): void {
  }
}
