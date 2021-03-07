import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  test = true;

  array: Usuario[] = [
    {
    nomeUsuario: "ANPINA",
    email: "antonio.pina@tvglobo.com.br",
    dataInclusao: new Date(2019, 5, 28),
    dataAlteracao: new Date(2019, 5, 30),
    regras: "01",
    status: "ATIVO"
    },
    {
      nomeUsuario: "CCHANG",
      email: "ciro.chang@tvglobo.com.br",
      dataInclusao: new Date(2019, 5, 28),
      dataAlteracao: new Date(2019, 5, 30),
      regras: "01",
      status: "ATIVO"
    },
    {
      nomeUsuario: "TMARCAL",
      email: "thiago.marcal@tvglobo.com.br",
      dataInclusao: new Date(2019, 5, 28),
      dataAlteracao: new Date(2019, 5, 30),
      regras: "01",
      status: "ATIVO"
    },
    {
      nomeUsuario: "ECGIANN",
      email: "ecgiannotto@tvglobo.com.br",
      dataInclusao: new Date(2019, 5, 28),
      dataAlteracao: new Date(2019, 5, 30),
      regras: "01",
      status: "ATIVO"
    },
    {
      nomeUsuario: "YFERNAND",
      email: "yuri.vasquez@tvglobo.com.br",
      dataInclusao: new Date(2019, 5, 28),
      dataAlteracao: new Date(2019, 5, 30),
      regras: "01",
      status: "ATIVO"
    },
    {
      nomeUsuario: "PLACERDA",
      email: "pedro.soares.lacerda@tvglobo.com.br",
      dataInclusao: new Date(2019, 5, 28),
      dataAlteracao: new Date(2019, 5, 30),
      regras: "01",
      status: "ATIVO"
    }
  ]

  displayedColumns: string[] = ['nomeUsuario', 'email', 'dataInclusao', 'dataAlteracao', 'regras', 'status']
  dataSource = new MatTableDataSource<Usuario>(this.array);

  constructor() { }

  ngOnInit() {
  }

}
