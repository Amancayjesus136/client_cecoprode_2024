import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfileComponent } from './perfile.component';

describe('PerfileComponent', () => {
  let component: PerfileComponent;
  let fixture: ComponentFixture<PerfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfileComponent]
    });
    fixture = TestBed.createComponent(PerfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
