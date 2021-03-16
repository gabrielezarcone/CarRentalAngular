export class AggiungiBtnConfig{
  icon: string;
  aggiungiItem: (...args) => any;
  removeFields: string[] = [];

  constructor(icon?: string, aggiungiItem?: (...args) => any, removeFields?: string[]) {
    this.icon = icon;
    this.aggiungiItem = aggiungiItem;
    this.removeFields = removeFields;
  }
}
