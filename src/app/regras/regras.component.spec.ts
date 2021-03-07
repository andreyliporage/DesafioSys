/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegrasComponent } from './regras.component';

describe('RegrasComponent', () => {
  let component: RegrasComponent;
  let fixture: ComponentFixture<RegrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
