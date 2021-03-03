import {Component, Input, OnInit} from '@angular/core';

export class MyButtonConfig {
  customCssClass = 'btn-primary';
  text: string;
  icon: string; // nome dell'icona di bootstrap icon. Per esempio icon=alarm equivale a <i class="bi-alarm"></i>

  constructor(text?: string, cssClass?: string, icon?: string) {
    if (text) {this.text = text; }
    if (cssClass) { this.customCssClass = cssClass; }
    if (icon) { this.icon = icon; }
  }

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
