import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PessoaService} from "../../shared-service/pessoa.service";
import {ExcelService} from "../../shared-service/excel.service";

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css'],
  providers: [PessoaService, ExcelService],
})


export class PessoaListComponent implements OnInit {

  pessoas: any[];

  constructor(private _service: PessoaService,
              private _router: Router,
              private _excelService: ExcelService) {
  }

  ngOnInit() {
    this._service.getPessoas().subscribe((pessoas) => {
      this.pessoas = pessoas;
    }, (error) => {
      console.error(error);
    })
  }

  deletePessoa(pessoa) {
    this._service.deletePessoa(pessoa.id).subscribe(() => {
      this.pessoas.splice(this.pessoas.indexOf(pessoa), 1);
    }, (error) => {
      console.error(error);
    });
  }

  exportToExcel() {
    this._excelService.exportAsExcelFile(this.pessoas, 'pessoas');
  }
}
