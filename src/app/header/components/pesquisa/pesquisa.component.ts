import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  pesquisarForm = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  pesquisa(event: any) {
    HeaderService.filtro.emit(event.target.value);
  }

}
