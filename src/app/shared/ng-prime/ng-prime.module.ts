import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  exports: [ButtonModule, InputTextModule, CheckboxModule],
})
export class NgPrimeModule {}
