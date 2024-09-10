import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResporteComponent } from './resporte.component';

describe('ResporteComponent', () => {
  let component: ResporteComponent;
  let fixture: ComponentFixture<ResporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
