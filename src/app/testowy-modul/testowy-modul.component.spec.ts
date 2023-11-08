import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestowyModulComponent } from './testowy-modul.component';

describe('TestowyModulComponent', () => {
  let component: TestowyModulComponent;
  let fixture: ComponentFixture<TestowyModulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestowyModulComponent]
    });
    fixture = TestBed.createComponent(TestowyModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
