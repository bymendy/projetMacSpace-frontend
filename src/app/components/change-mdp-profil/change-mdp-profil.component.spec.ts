import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMdpProfilComponent } from './change-mdp-profil.component';

describe('ChangeMdpProfilComponent', () => {
  let component: ChangeMdpProfilComponent;
  let fixture: ComponentFixture<ChangeMdpProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeMdpProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeMdpProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
