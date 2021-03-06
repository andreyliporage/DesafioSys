import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  security = false;
  perm = true;

  constructor() { }

  ngOnInit() {
  }

  getEvento(event: any) {
    if(event.value == "security") {
      this.perm == false;
      this.security = true;
    } 
  }

}
