import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdFournisseursComponent } from './cmd-fournisseurs.component';

describe('CmdFournisseursComponent', () => {
  let component: CmdFournisseursComponent;
  let fixture: ComponentFixture<CmdFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdFournisseursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmdFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
