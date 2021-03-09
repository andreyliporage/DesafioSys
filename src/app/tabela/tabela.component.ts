import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TabelaService } from 'src/app/services/tabela.service';
import { Usuario } from 'src/app/models/usuario';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { RegrasComponent } from '../regras/regras.component';
import { HeaderService } from '../services/header.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  filtro: string = '';
  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['checkBox', 'nomeUsuario', 'email', 'dataInclusao', 'dataAlteracao', 'regras', 'status', 'edicao' ,'acoes']
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  constructor(private tabelaService: TabelaService,  private editar: MatDialog, private regras: MatDialog) { }

  ngOnInit() {
    this.getUsuarios(this.filtro);

    HeaderService.filtro.subscribe((evento: string) => {
      this.filtro = evento;
      this.getUsuarios(this.filtro);
    });
  }

  getUsuarios(filtro?: any) {
    this.tabelaService.getUsuarios().subscribe(
      result => {
        if (filtro != '') {
          this.usuarios = result.filter(usuario => usuario.nomeUsuario.toLowerCase() == filtro.toLowerCase());
          return;
        }
        this.usuarios = result;
      },
      falha => console.log(falha)
    );
  }

  abreEditar() {
    const editRef = this.editar.open(EditarComponent, {
      width: '40vw',
    });

    editRef.updatePosition({
      top: '0',
      right: '0',
      bottom: '0'
    })
  }
  
  abreRegras() {
    const regRef = this.regras.open(RegrasComponent, {
      width: '40vw',
    });

    regRef.updatePosition({
      top: '0',
      right: '0',
      bottom: '0'
    })
  }
}
