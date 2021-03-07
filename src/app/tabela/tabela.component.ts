import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TabelaService } from 'src/app/services/tabela.service';
import { Usuario } from 'src/app/models/usuario';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['checkBox', 'nomeUsuario', 'email', 'dataInclusao', 'dataAlteracao', 'regras', 'status', 'edicao' ,'acoes']
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  constructor(private tabelaService: TabelaService,  private editar: MatDialog) { }

  ngOnInit() {
    this.tabelaService.getUsuarios().subscribe(
      result => this.usuarios = result,
      falha => console.log(falha)
      );
  }

  abreEditar() {
    const filtroRef = this.editar.open(EditarComponent, {
      width: '40vw',
    });

    filtroRef.updatePosition({
      top: '0',
      right: '0',
      bottom: '0'
    })
  }
}
