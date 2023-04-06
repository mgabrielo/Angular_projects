import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-err-msg-alter',
  templateUrl: './err-msg-alter.component.html',
  styleUrls: ['./err-msg-alter.component.scss'],
})
export class ErrMsgAlterComponent implements OnInit {
  @Input() empty_message!: string;
  @Input() field!: FormGroup;

  @Input() error!: string;
  constructor() {}

  ngOnInit() {}

  shouldShowComponent() {
    // !form.get('email')?.value && form.get('email')?.touched

    if (this.field.touched && !this.field.get('email')?.value) {
      return true;
    }
    return false;
  }
}
