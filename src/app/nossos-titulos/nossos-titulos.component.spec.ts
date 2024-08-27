import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosTitulosComponent } from './nossos-titulos.component';

describe('NossosTitulosComponent', () => {
  let component: NossosTitulosComponent;
  let fixture: ComponentFixture<NossosTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossosTitulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossosTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
