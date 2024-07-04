import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdDetailsComponent } from './cmd-details.component';

describe('CmdDetailsComponent', () => {
  let component: CmdDetailsComponent;
  let fixture: ComponentFixture<CmdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
