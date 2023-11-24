import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor() { }

  protected SetHeaderJson() {
    let token = localStorage.getItem("token")
    let header = {
      "Authorization": "",
      "Content-Type": "application/json",
    }
    if(token){
      header.Authorization = `UDSLongToken ${token}`
    }
    return {
      Headers: new HttpHeaders(header)
    }
  }

  protected handleError(response: Response | any) {
    let customError: string[] = []

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === "Unknown Error") {
        customError.push("Ocorreu um erro inesperado. Por favor tente mais tarde.")
        response.error.errors = customError
      }
    }
    return throwError(response)
  }


}
