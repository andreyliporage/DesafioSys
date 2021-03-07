import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  security = false;
  perm = true;

  constructor(private filtro: MatDialog) { }

  ngOnInit() {
  }

  getEvento(event: any) {
    if(event.value == "security") {
      this.perm == false;
      this.security = true;
    } 
  }

  abreFiltro() {
    const filtroRef = this.filtro.open(FiltroComponent, {
      width: '40vw',
    });

    filtroRef.updatePosition({
      top: '0',
      right: '0',
      bottom: '0'
    })
  }
}
