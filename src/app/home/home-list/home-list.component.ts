import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pet } from '../home.modal';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  @Output() petWasSelected= new EventEmitter<Pet>();
pets:Pet[]=[
  new Pet('Rottweiler', 'Guard Dog', 'https://image.shutterstock.com/image-photo/funny-rottweiler-puppy-sitting-on-260nw-2014167824.jpg'),
  new Pet('Parrot', 'Bird', 'https://cdn.britannica.com/s:800x450,c:crop/87/196687-138-2D734164/facts-parrots.jpg'),
  new Pet('Cat', 'Persian Cat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg'),
  new Pet('Fish', 'Fighter', 'https://3.imimg.com/data3/KC/GC/MY-8019751/half-moon-tail-betta-fish-500x500.jpg'),
  new Pet('Rabbit', 'Rabbit', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=480:*')
];
  constructor() { }

  ngOnInit(): void {
  }
  onPetSelected(pet: Pet){
    this.petWasSelected.emit(pet);
 }

}
