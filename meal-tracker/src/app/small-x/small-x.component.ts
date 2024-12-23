import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-small-x',
  standalone: true,
  imports: [],
  templateUrl: './small-x.component.html',
  styleUrl: './small-x.component.css'
})
export class SmallXComponent implements OnInit{
  @Output() click = new EventEmitter<void>();
  constructor(){}

  ngOnInit(): void {}

  clicked() {
    this.click.emit();
  }
}
