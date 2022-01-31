import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../home.modal';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() pet:Pet;
@Output() petSelected = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelected(){
    this.petSelected.emit();
  }

}
