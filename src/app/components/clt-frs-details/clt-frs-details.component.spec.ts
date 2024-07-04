import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CltFrsDetailsComponent } from './clt-frs-details.component';

describe('CltFrsDetailsComponent', () => {
  let component: CltFrsDetailsComponent;
  let fixture: ComponentFixture<CltFrsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CltFrsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CltFrsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
