export class AggiungiBtnConfig{
  icon: string;
  aggiungiItem: (...args) => any;

  constructor(icon?: string, aggiungiItem?: (...args) => any) {
    this.icon = icon;
    this.aggiungiItem = aggiungiItem;
  }
}
