import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from './service/produto.service';
import { UtilService } from 'src/app/core/service/util.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  dataSource: Produto[] = [];

  displayedColumns: string[] = [
    'actions',
    'sku',
    'name',
    'stock',
    'cost',
    'price',
  ];

  typeAdd: boolean = false;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    // this.dataSource = this.dados
    this.carregarProdutos()

    this.form = this.fb.group({
      id: [null],
      sku: [null, Validators.required],
      name: [null, Validators.required],
      stock: [null],
      cost: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  carregarProdutos() {
    this.produtoService.listarTodos().subscribe((response) => {
      this.dataSource = response;
    });
  }

  listarProdutos(): void {
    this.carregarProdutos()
  }

  addProdutos(): void {
    this.form.reset()
    this.typeAdd = true;
  }

  search(): void {
    this.typeAdd = false;
  }

  salvar(): void {
    if (this.form.valid) {
      let dados = this.form.value as Produto;
      if (!dados.id) {
        this.inserir(dados)
        this.utilService.alertSuccess('Registro incluído com sucesso.')
      } else {
        this.atualizar(dados)
        this.utilService.alertSuccess('Registro alterado com sucesso.')
      }
      this.typeAdd = false;
    } else {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  editar(produto: Produto): void {
    this.form.patchValue(produto)
    this.typeAdd = true
  }

  inserir(objeto: Produto) {
    this.produtoService.inserir(objeto).subscribe((response) => {
      console.log('response inserir', response)
      this.carregarProdutos()
      this.form.reset()
    });
  }

  atualizar(objeto: Produto) {
    this.produtoService.editar(objeto).subscribe((response) => {
      console.log('response atualizar', response)
      this.carregarProdutos()
      this.form.reset()
    });
  }

  async deletar(id: string) {

    let confirm = await this.utilService.alertConfirmation('Deseja realmente excluir o registro?')

    if (confirm.isConfirmed) {
      this.produtoService.deletar(id).subscribe((response) => {
        console.log('response deletar', response)
        if (response) {
          this.utilService.alertSuccess('Registro excluído com sucesso.')
          this.carregarProdutos()
        }
      });
    }

  }

}
