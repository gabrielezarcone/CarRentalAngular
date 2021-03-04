import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from './basic-components/my-button/my-button.component';
import {MyHeaders, MyOrder, TableConfig} from './basic-components/table/table.component';
import {UsersService} from './Service/api-services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private userService: UsersService){}
  title = 'CarRentalAngular';
  btnConfig: MyButtonConfig = new MyButtonConfig('hello', undefined, 'tree-fill');
  // Table --------------------------------------------------------------------------------------------------
  order: MyOrder = new MyOrder('name', 'asc');
  headers: MyHeaders[] = [new MyHeaders('name', 'Nome'), new MyHeaders('surname', 'Cognome')];
  tableConfig: TableConfig = new TableConfig(this.headers, this.order);
  tableData: any[];
  // --------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.tableData = data
    );
  }
}
