import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Pessoa} from "../pessoa";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PessoaService {
  private baseUrl: string = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private pessoa: Pessoa;

  constructor(private _http: Http) {
  }

  getPessoas() {
    return this._http.get(this.baseUrl + '/pessoas', this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getPessoa(id: Number) {
    return this._http.get(this.baseUrl + '/pessoa/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deletePessoa(id: Number) {
    return this._http.delete(this.baseUrl + '/pessoa/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createPessoa(pessoa: Pessoa) {
    return this._http.post(this.baseUrl + '/pessoa', JSON.stringify(pessoa), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updatePessoa(pessoa: Pessoa) {
    return this._http.put(this.baseUrl + '/pessoa', JSON.stringify(pessoa), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");

  }
}
