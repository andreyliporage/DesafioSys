/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TabelaService } from './tabela.service';

describe('Service: Tabela', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabelaService]
    });
  });

  it('should ...', inject([TabelaService], (service: TabelaService) => {
    expect(service).toBeTruthy();
  }));
});
