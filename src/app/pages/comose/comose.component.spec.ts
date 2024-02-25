import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoseComponent } from './comose.component';

describe('ComoseComponent', () => {
  let component: ComoseComponent;
  let fixture: ComponentFixture<ComoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
