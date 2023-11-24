import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { ProdutoComponent } from './components/produto/produto.component';

// angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './shared/input/input.component';
import { MonetarioComponent } from './shared/monetario/monetario.component';
import { NumeralComponent } from './shared/numeral/numeral.component';
import { BotaoComponent } from './shared/botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    InputComponent,
    MonetarioComponent,
    NumeralComponent,
    BotaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
