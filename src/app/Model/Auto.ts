export class Auto{
  id: number;
  costruttore: string;
  modello: string;
  immatricolazione: Date;
  targa: string;
  tipologia: string;

  constructor(id?: number, costruttore?: string, modello?: string, immatricolazione?: Date, targa?: string, tipologia?: string) {
    this.id = id;
    this.costruttore = costruttore;
    this.modello = modello;
    this.immatricolazione = immatricolazione;
    this.targa = targa;
    this.tipologia = tipologia;
  }
}
