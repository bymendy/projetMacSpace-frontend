import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMvtStkProduitsComponent } from './details-mvt-stk-produits.component';

describe('DetailsMvtStkProduitsComponent', () => {
  let component: DetailsMvtStkProduitsComponent;
  let fixture: ComponentFixture<DetailsMvtStkProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMvtStkProduitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsMvtStkProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
