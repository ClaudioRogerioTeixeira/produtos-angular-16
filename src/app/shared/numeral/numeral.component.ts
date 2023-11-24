import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-numeral',
  standalone: true,
  imports: [CommonModule,
    NgxCurrencyDirective,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './numeral.component.html',
  styleUrls: ['./numeral.component.scss']
})
export class NumeralComponent {

  inputType: MatFormFieldAppearance = 'outline';

  @Input() form!: FormGroup;
  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() placeHolder: string = '';

}
