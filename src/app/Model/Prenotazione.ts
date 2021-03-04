export class Prenotazione{
  id: number;
  inizio: Date;
  fine: Date;
  stato: string;
  user: number;
  auto: number;

  constructor(id: number, inizio: Date, fine: Date, stato: string, user: number, auto: number) {
    this.id = id;
    this.inizio = inizio;
    this.fine = fine;
    this.stato = stato;
    this.user = user;
    this.auto = auto;
  }
}
