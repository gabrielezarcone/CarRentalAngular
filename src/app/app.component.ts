import { Component } from '@angular/core';
import {MyButtonConfig} from './basic-components/my-button/my-button.component';
import {MyHeaders, MyOrder, TableConfig} from './basic-components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarRentalAngular';
  btnConfig: MyButtonConfig = new MyButtonConfig('hello');
  // Table --------------------------------------------------------------------------------------------------
  order: MyOrder = new MyOrder('name', 'asc');
  headers: MyHeaders[] = [new MyHeaders('name', 'Nome'), new MyHeaders('surname', 'Cognome'), new MyHeaders('age', 'Età')];
  tableConfig: TableConfig = new TableConfig(this.headers, this.order);
  tableData: any[] = [{name: 'a', surname: 'A', age: 22}, {name: 'b', surname: 'B', age: 32}, {name: 'c', surname: 'C', age: 20} ];
  // --------------------------------------------------------------------------------------------------
}
