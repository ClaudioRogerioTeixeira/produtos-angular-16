import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/core/service/api.service';
import { Produto } from '../../produto.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor(private apiService: ApiService) { }

private classController: string = 'products'

listarTodos(): Observable<Produto[]> {
  return this.apiService.get(environment.api + this.classController);
}

inserir(objeto: Produto): Observable<Produto> {
  return this.apiService.post(environment.api + this.classController, objeto)
}

editar(objeto: Produto): Observable<Produto> {
  return this.apiService.put(environment.api + this.classController + '/' + objeto.id, objeto)
}

deletar(id: string): Observable<Produto> {
  return this.apiService.delete(environment.api + this.classController + '/' + id)
}

}
