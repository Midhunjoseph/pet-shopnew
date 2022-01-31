
import { Component, Input } from '@angular/core';
import { PetService } from '../login.service';
//import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  // @Input() pet: { name: string, desc: string, image: string };
  // @Input() id: number;
  pets: { name: string, desc: string, image: string }[] = [];
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.pets = this.petService.pets;
console.log(this.pets);
  }
  // onSetTo(name: string) {
  //    this.petService.updateStatus(this.id, name);
  //   // // this.loggingService.logStatusChange(status);
  //    this.petService.statusUpdated.emit(name);
  // }

}

