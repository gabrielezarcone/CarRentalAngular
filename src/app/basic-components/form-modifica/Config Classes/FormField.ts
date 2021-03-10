export class FormField{
  key: string;
  label: string;
  type: string;

  constructor(key?: string, label?: string, type?: string) {
    this.key = key;
    this.label = label;
    this.type = type;
  }
}
