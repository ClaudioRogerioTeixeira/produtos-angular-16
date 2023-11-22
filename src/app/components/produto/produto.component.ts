import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {

  dataSource: Produto[] = []
  displayedColumns: string[] = [
    'actions', 'sku', 'name', 'stock', 'cost', 'price'
  ]

  dados: Produto[] = [
    {sku: '1', name: 'mouse', stock: 23, cost: 20, price: 50},
    {sku: '1', name: 'mouse', stock: 23, cost: 20, price: 50},
  ]

  typeAdd: boolean = true

  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource = this.dados

    this.form = this.fb.group({
      id: [null],
      sku: [null, Validators.required],
      name: [null, Validators.required],
      stock: [null],
      cost: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

  listarProdutos(): void {
    console.log('listarProdutos: ', true)
  }

  addProdutos(): void {
    this.typeAdd = true
    console.log('incluirProdutos: ', true)
  }

  search(): void {
    this.typeAdd = false
  }

  salvar():void {
    this.typeAdd = false
  }

  editar():void {

  }

}
