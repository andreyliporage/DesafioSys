import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  static filtro: EventEmitter<string> = new EventEmitter();

}
