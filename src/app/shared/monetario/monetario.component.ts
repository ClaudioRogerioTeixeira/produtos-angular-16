import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-monetario',
  standalone: true,
  imports: [
    CommonModule,
    NgxCurrencyDirective,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './monetario.component.html',
  styleUrls: ['./monetario.component.scss'],
})
export class MonetarioComponent {

  inputType: MatFormFieldAppearance = 'outline';

  @Input() form!: FormGroup;
  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() placeHolder: string = '';

}
