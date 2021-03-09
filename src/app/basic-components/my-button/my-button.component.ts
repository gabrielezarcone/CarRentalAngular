import {Component, Input, OnInit} from '@angular/core';

export class MyButtonConfig {
  customCssClass = 'btn-primary';
  text: string;
  icon: string; // nome dell'icona di bootstrap icon. Per esempio icon=alarm equivale a <i class="bi-alarm"></i>
  routerLink?: string; // contiene la stringa di routerLink usata dal padre per applicare l'attributo routerLink
  click: (...args: any) => void; // contiene la funzione di click usata dal padre per applicare l'attributo (click)
  visible?: (row) => boolean;

  constructor(text?: string, cssClass?: string, icon?: string, routerLink?: string, click?: (...args: any) => void, visible?: (row) => boolean) {
    if (text) {this.text = text; }
    if (cssClass) { this.customCssClass = cssClass; }
    if (icon) { this.icon = icon; }
    if (routerLink) { this.routerLink = routerLink; }
    if (click) { this.click = click; }
    if (visible) { this.visible = visible; }
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
