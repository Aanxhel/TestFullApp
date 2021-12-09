import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienzoComoponenteComponent } from './lienzo-comoponente.component';

describe('LienzoComoponenteComponent', () => {
  let component: LienzoComoponenteComponent;
  let fixture: ComponentFixture<LienzoComoponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienzoComoponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienzoComoponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
