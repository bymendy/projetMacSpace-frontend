import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button-action.component.html',
  styleUrl: './button-action.component.css'
})
export class ButtonActionComponent implements OnInit {

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;


  @Output()
  clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
      
  }

  buttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
