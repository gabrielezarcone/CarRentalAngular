export class ModalConfig{
  title: string;
  body: string;
  conferma: (...param: any) => any;
  rifiuta: (...param: any) => any;

  constructor(title?: string, body?: string, conferma?: (...param: any) => any, rifiuta?: (...param: any) => any) {
    this.title = title;
    this.body = body;
    this.conferma = conferma;
    this.rifiuta = rifiuta;
  }
}
