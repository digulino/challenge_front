import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Pessoa} from "../pessoa";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PessoaService {
  private baseUrl: string = 'http://localhost:8080/api';
  private headers = {'Content-Type': 'application/json'};
  private options = {headers: this.headers};

  constructor(private _http: HttpClient) {
  }

  getPessoas() {
    return this._http.get(this.baseUrl + '/pessoas', this.options)
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  getPessoa(id: number) {
    return this._http.get(this.baseUrl + '/pessoa/' + id, this.options)
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  deletePessoa(id: number) {
    return this._http.delete(this.baseUrl + '/pessoa/' + id, this.options)
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  createOrUpdatePessoa(pessoa: Pessoa) {
    return this._http.post(this.baseUrl + '/pessoa', JSON.stringify(pessoa), this.options)
      .map((response: any) => response)
      .catch(this.errorHandler);
  }

  errorHandler(error: any) {
    console.error(error);
    return Observable.throw(error || "SERVER ERROR");

  }
}
