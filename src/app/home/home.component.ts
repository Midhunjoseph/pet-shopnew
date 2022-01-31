import { Component, OnInit } from '@angular/core';
import { Pet } from './home.modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
selectedPet: Pet;
  constructor() { }

  ngOnInit(): void {
  }

}
