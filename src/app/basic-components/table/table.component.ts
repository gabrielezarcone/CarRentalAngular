import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {MyButtonConfig} from '../my-button/my-button.component';
import {AggiungiBtnConfig} from '../aggiungi-elemento/Config Classes/AggiungiBtnConfig';

export class TableConfig{
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
  pagination: MyPagination;
  constructor(headers: MyHeaders[], order: MyOrder) {
    this.headers = headers;
    this.order = order;
    this.search = new MySearch();
    this.pagination = new MyPagination();
  }
  resetIcons(): void{
    for (const header of this.headers){
      header.icon = '';
    }
  }
  setIcon(icon: string, key: string): void{
    for (const header of this.headers){
      if (header.key === key){
        header.setIcon(icon);
      }
    }
  }
  setSearchCss(cssClass: string, key: string): void{
    for (const header of this.headers){
      if (header.key === key){
        header.setSearchCss(cssClass);
      }
    }
  }
}


export class MyPagination{
  itemPerPage = 5;
  itemPerPageOptions = [5, 10, 20, 50, 100, 500];
  currentPage = 0;
  totalPageNumber: number;
}


export class MySearch{
  columns: string[] = []; // specifica su quali colonne viene effettuata la ricerca
  text: string; // testo cercato dall'utente
  setColumns(columns: string[]): void{
    this.columns = columns;
  }
}


export class MyOrder {
  defaultColumn: string;
  orderType: string;
  constructor(defaultColumn: string, orderType: string) {
    this.defaultColumn = defaultColumn;
    this.orderType = orderType;
  }
}


export class MyHeaders{
  key: string;
  label: string;
  icon: string;
  searchCss: string;
  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }
  setIcon(icon: string): void{
    this.icon = icon;
  }
  setSearchCss(cssClass: string): void{
    this.searchCss = cssClass;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges, OnInit {
  @Input() config: TableConfig;
  @Input() data: any[];
  renderedData: any[];
  // -------------------------------
  prevBtn = new MyButtonConfig(undefined, 'btn-secondary', 'arrow-left-circle' );
  nextBtn = new MyButtonConfig(undefined, 'btn-secondary', 'arrow-right-circle' );
  // -------------------------------
  @Input() crudBtns: MyButtonConfig[];
  // -------------------------------
  @Input() aggiungiBtnConfig?: AggiungiBtnConfig; // Se viene specificato setta a true aggiungiItem
  aggiungiItem = false; // Indica se la tabella deve presentare un tasto per aggiungere un nuovo elemento
  newItem: any;
  // -------------------------------

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.renderedData = this.data;
    // Crea nuovo oggetto della stessa classe dei dati senza valori -------------------------------------------------
    if (this.data){
      this.newItem = {...this.data[0]};
      _.forOwn(this.data[0], (value, key) => this.newItem[key] = undefined );
    }
    //  -------------------------------------------------------------------------------------------------------------
    if (this.aggiungiBtnConfig !== undefined){
      this.aggiungiItem = true;
    }
  }

  orderBy(key: string): void {
    this.toggleOrderType();
    this.config.resetIcons();
    this.renderedData.sort((a, b) => {
      if (this.config.order.orderType === 'asc'){
        this.config.setIcon('caret-up-fill', key);
        return (a[key] > b[key]) ? 1 : -1;
      }
      else {
        this.config.setIcon('caret-down-fill', key);
        return (a[key] < b[key]) ? 1 : -1;
      }
    });
    this.renderedData = [...this.renderedData];
  }

  toggleOrderType(): void{
    this.config.order.orderType = this.config.order.orderType === 'desc' ? 'asc' : 'desc';
  }

  toggleFilter(key: string): void {
    const columns = this.config.search.columns;
    const filtroAcceso: number = _.findIndex(columns, (n) => n === key);
    if (filtroAcceso === -1){
      this.config.setSearchCss('filterTrue', key);
      this.config.search.columns = _.concat(columns, key);
    }
    else {
      this.config.setSearchCss('filterFalse', key);
      this.config.search.columns = _.filter(columns, (n) => n !== key);
    }
  }

  filtra(text: string): void {
    if (text === ''){
      this.renderedData = this.data;
    }
    else {
      this.renderedData = _.filter(this.data, (dato) => {
        for (const column of this.config.search.columns){
          if (dato[column].toString() === text){
            return dato;
          }
        }
      });
    }
  }

  previousPage(): void {
    if (this.config.pagination.currentPage !== 0){
      this.config.pagination.currentPage --;
      this.updatePaginationReference();
    }
  }

  nextPage(): void {
    if ( (this.config.pagination.currentPage + 1) < this.config.pagination.totalPageNumber ){
      this.config.pagination.currentPage ++;
      this.updatePaginationReference();
    }
  }

  updatePaginationReference(currentPage?: number, itemPerPage?: number): void {
    if (currentPage) {
      if (currentPage < 0){
        this.config.pagination.currentPage = 0;
      }
      else if (currentPage > this.config.pagination.totalPageNumber){
        this.config.pagination.currentPage = this.config.pagination.totalPageNumber - 1;
      }
      else {
        this.config.pagination.currentPage = currentPage;
      }
    }
    if (itemPerPage) { this.config.pagination.itemPerPage = itemPerPage; }
    this.config.pagination = {...this.config.pagination};
  }
}
