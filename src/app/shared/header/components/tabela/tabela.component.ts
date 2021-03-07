import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TabelaService } from 'src/app/services/tabela.service';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['nomeUsuario', 'email', 'dataInclusao', 'dataAlteracao', 'regras', 'status']
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  constructor(private tabelaService: TabelaService) { }

  ngOnInit() {
    this.tabelaService.getUsuarios().subscribe(
      result => this.usuarios = result,
      falha => console.log(falha)
      );
  }

}
