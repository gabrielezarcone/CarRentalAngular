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
  headers: MyHeaders[] = [new MyHeaders('name', 'Nome'), new MyHeaders('surname', 'Cognome')];
  tableConfig: TableConfig = new TableConfig(this.headers, this.order);
  tableData: any[] = [{name: 'a', surname: 'A'}, {name: 'b', surname: 'B'}, {name: 'c', surname: 'C'}, ];
  // --------------------------------------------------------------------------------------------------
}
