import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

  @Input() titulo: string = ''
  @Input() cor: string = ''
  @Input() icone: string = ''
  @Output() retorno = new EventEmitter<any>

  clicado(event: any ){
    this.retorno.emit()
  }

}
