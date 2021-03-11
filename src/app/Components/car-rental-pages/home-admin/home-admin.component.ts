import { Component, OnInit } from '@angular/core';
import {MyHeaders, MyOrder, TableConfig} from '../../../basic-components/table/table.component';
import {User} from '../../../Model/User';
import {UsersService} from '../../../Service/api-services/users.service';
import {MyButtonConfig} from '../../../basic-components/my-button/my-button.component';
import {AggiungiBtnConfig} from '../../../basic-components/aggiungi-elemento/Config Classes/AggiungiBtnConfig';

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
    new MyButtonConfig('Modifica', 'btn-success', 'pen', (user) => '/modifica/user/' + user.id),
    new MyButtonConfig('Elimina', 'btn-danger' , 'x-octagon', (user) => '/elimina/user/' + user.id),
    new MyButtonConfig('Prenotazioni', 'btn-primary' , 'list', (user) => '/prenotazioni/user/' + user.id)
  ];
  // ****************************************** Tabella
  aggiungi = new AggiungiBtnConfig('person-plus', (newUser) => this.aggiungiUser(newUser));


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.tableData = data
    );
  }

  aggiungiUser(newUser): void {
    this.userService.create(newUser).subscribe(
      data => window.location.reload(),
      error => console.error(error)
    );
  }

}
