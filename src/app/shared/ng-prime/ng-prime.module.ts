import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ChartModule
  ],
  exports: [StyleClassModule, ButtonModule, InputTextModule, CheckboxModule, ChartModule],
})
export class NgPrimeModule {}
