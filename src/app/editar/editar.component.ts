import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  email = new FormControl('yuri.vasquez@tvglobo.com.br', [Validators.email]);
  usuario = new FormControl('YFERNAND', [Validators.required]);
  nomeUsuario = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
