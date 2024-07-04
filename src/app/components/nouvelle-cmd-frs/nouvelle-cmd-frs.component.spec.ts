import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdFrsComponent } from './nouvelle-cmd-frs.component';

describe('NouvelleCmdFrsComponent', () => {
  let component: NouvelleCmdFrsComponent;
  let fixture: ComponentFixture<NouvelleCmdFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleCmdFrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleCmdFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
