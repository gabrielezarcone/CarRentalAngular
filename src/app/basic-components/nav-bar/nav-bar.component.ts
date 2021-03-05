import {Component, Input, OnInit} from '@angular/core';
import {NavBarElement} from './ConfigClasses/NavBarElement';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navElements: NavBarElement[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
