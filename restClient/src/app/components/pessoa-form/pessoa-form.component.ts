import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'

import {Pessoa} from "../../pessoa";
import {PessoaService} from "../../shared-service/pessoa.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
  providers: [PessoaService, DatePipe]
})
export class PessoaFormComponent implements OnInit {

  public pessoaForm: FormGroup;
  public id: Number;
  public titulo: String;
  public pessoa = new Pessoa(); //model utilizado para adicionar e alterar

  public dateStr: String;
  private sub: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _service: PessoaService,
    private datePipe: DatePipe
  ) {
    this.pessoaForm = this.fb.group({
      id: [],
      nome: ['', [<any>Validators.minLength(3), Validators.required]],
      dtNascimento: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    if (this.id == undefined) {
      this.titulo = "Novo registro"
    } else {
      this.titulo = "Alterar registro"
    }

    if (!this.id) {
      return;
    }

    this._service.getPessoa(this.id)
      .subscribe(pessoa => {
        this.pessoa = pessoa;
        if (this.id > 0) {
          this.dateStr = this.datePipe.transform(pessoa.dtNascimento, 'dd/MM/yyyy');
          //TODO ... forma de carregar corretamente a data de nascimento no respectivo editor
          (<FormGroup>this.pessoaForm).setValue(pessoa, {onlySelf: false});
        }
      })
  }

  save(model: Pessoa) {
    if (this.id == undefined) {
      this._service.createPessoa(model)
        .subscribe(pessoa => {
          this.router.navigate(['/']);
        }, error => {
          console.error(error);
        })
    } else {
      this._service.updatePessoa(model)
        .subscribe(pessoa => {
          this.router.navigate(['/']);
        }, error => {
          console.error(error);
        })
    }
  }
}
