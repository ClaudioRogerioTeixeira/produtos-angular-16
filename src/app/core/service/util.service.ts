import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  alertSuccess(text: string) {
    Swal.showLoading();
    Swal.fire({
      title: '',
      text: text, // `Registro ${text} com sucesso.`,
      icon: 'success',
    });
  }

  alertConfirmation(message: string) {
    return Swal.fire({
      title: '',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    });
  }



}
