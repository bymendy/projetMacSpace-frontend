import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdFrsComponent } from './cmd-frs.component';

describe('CmdFrsComponent', () => {
  let component: CmdFrsComponent;
  let fixture: ComponentFixture<CmdFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdFrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmdFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
