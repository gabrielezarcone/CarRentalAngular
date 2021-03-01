import { Component } from '@angular/core';
import {MyButtonConfig} from './basic-components/my-button/my-button.component';
import {MyHeaders, TableConfig} from './basic-components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarRentalAngular';
  btnConfig: MyButtonConfig = new MyButtonConfig('hello');
  headers: MyHeaders[] = [new MyHeaders('1', 'a'), new MyHeaders('2', 'b'), new MyHeaders('3', 'c')];
  tableConfig: TableConfig = new TableConfig(this.headers);
  tableData: any[] = [1, 2, 3];
}
