import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleInterComponent } from './nouvelle-inter.component';

describe('NouvelleInterComponent', () => {
  let component: NouvelleInterComponent;
  let fixture: ComponentFixture<NouvelleInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleInterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
