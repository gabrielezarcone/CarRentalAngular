import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormField} from './Config Classes/FormField';

@Component({
  selector: 'app-form-modifica',
  templateUrl: './form-modifica.component.html',
  styleUrls: ['./form-modifica.component.scss']
})
export class FormModificaComponent implements OnChanges {
  @Input() object: any;
  @Input() fields: FormField[];
  @Output() submitEvent = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(): void {
    if (this.object){
      this.form = this.fb.group(this.object);
    }
  }

  onSubmit(): void{
    this.object = this.form.value;
    this.submitEvent.emit(this.object);
  }

}
