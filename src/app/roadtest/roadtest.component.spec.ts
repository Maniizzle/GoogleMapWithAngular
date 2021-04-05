/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoadtestComponent } from './roadtest.component';

describe('RoadtestComponent', () => {
  let component: RoadtestComponent;
  let fixture: ComponentFixture<RoadtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
