import {Component, Input, OnInit} from '@angular/core';

export class MyButtonConfig {
  customCssClass: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
  @Input() buttonConfig: MyButtonConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
