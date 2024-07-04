import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css'
})
export class ButtonActionComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
      
  }

  buttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
