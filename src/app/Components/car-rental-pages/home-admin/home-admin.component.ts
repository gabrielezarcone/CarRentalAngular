import { Component, OnInit } from '@angular/core';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {User} from '../../../Model/User';
import {UsersService} from '../../../Service/api-services/users.service';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';

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
  tableCrudBtns: MyButtonConfig[] = [
    new MyButtonConfig('Modifica', 'btn-success', 'arrow-clockwise', '/modifica/user/'), // l'id viene aggiunto da component CrudButtons
    new MyButtonConfig('Elimina', 'btn-danger' , 'x-octagon', '/elimina/user/'),
    new MyButtonConfig('Prenotazioni', 'btn-primary' , 'list')
  ];
  // ****************************************** Tabella

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.tableData = data
    );
  }

}
