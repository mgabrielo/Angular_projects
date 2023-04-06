import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ErrMsgAlterComponent } from 'src/app/components/err-msg-alter/err-msg-alter.component';
import { ErrMsgInvalidComponent } from 'src/app/components/err-msg-invalid/err-msg-invalid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage, ErrMsgAlterComponent, ErrMsgInvalidComponent],
})
export class LoginPageModule {}
