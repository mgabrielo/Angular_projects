import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-err-msg-invalid',
  templateUrl: './err-msg-invalid.component.html',
  styleUrls: ['./err-msg-invalid.component.scss'],
})
export class ErrMsgInvalidComponent implements OnInit {
  @Input() invalid_message!: string;
  @Input() invalid_field!: FormGroup;
  @Input() error!: string;

  constructor() {}

  ngOnInit() {}

  shouldInvalidComponent() {
    if (
      this.invalid_field.get('email')?.errors &&
      this.invalid_field.get('email')?.value
    ) {
      return true;
    }
    return false;
  }
}
