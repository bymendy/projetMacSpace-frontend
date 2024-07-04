import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterClientsComponent } from './inter-clients.component';

describe('InterClientsComponent', () => {
  let component: InterClientsComponent;
  let fixture: ComponentFixture<InterClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
