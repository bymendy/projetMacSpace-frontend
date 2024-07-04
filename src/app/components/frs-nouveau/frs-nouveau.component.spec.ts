import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrsNouveauComponent } from './frs-nouveau.component';

describe('FrsNouveauComponent', () => {
  let component: FrsNouveauComponent;
  let fixture: ComponentFixture<FrsNouveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrsNouveauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrsNouveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
