import { Component, OnInit } from '@angular/core';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {User} from '../../../Model/User';
import {UsersService} from '../../../Service/api-services/users.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  // Tabella ******************************************
  headers: MyHeaders[] = [
    new MyHeaders('username', 'Username'),
    new MyHeaders('name', 'Nome'),
    new MyHeaders('surname', 'Cognome'),
    new MyHeaders('birthDate', 'Data di nascita'),
    new MyHeaders('deleted', 'Disattivo')
  ];
  // ------------------------------
  order: MyOrder = new MyOrder('username', 'asc');
  // ------------------------------
  tableConfig = new TableConfig(this.headers, this.order);
  tableData: User[];
  // ****************************************** Tabella

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.tableData = data
    );
  }

}
