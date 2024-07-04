import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDetailsComponent } from './inter-details.component';

describe('InterDetailsComponent', () => {
  let component: InterDetailsComponent;
  let fixture: ComponentFixture<InterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
