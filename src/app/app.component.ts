import { Component } from '@angular/core';
import {MyButtonConfig} from './basic-components/my-button/my-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarRentalAngular';
  btnConfig: MyButtonConfig = new MyButtonConfig('hello');
}
