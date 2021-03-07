import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Regra } from '../models/regra';

const DATA_MOCK: Regra[] = [
  { regra: 'DE FRENTE COM O CIRÃO I', faixa: '22:30-23:59' },
  { regra: 'DE FRENTE COM O CIRÃO II', faixa: '00:00-01:30' }
]

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent implements OnInit {
  
  
  displayedColumns: string[] = ['regra', 'faixa', 'acoes']
  dataSource = new MatTableDataSource<Regra>(DATA_MOCK);

  constructor() { }

  ngOnInit() {
  }

}
