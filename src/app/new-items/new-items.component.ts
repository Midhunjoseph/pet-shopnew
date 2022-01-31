import { Component, OnInit } from '@angular/core';
//import { LoggingService } from '../logging.service';
import { PetService } from '../login.service';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent implements OnInit {

  isCollapsed = false;
  constructor(private petService: PetService) {
      this.petService.statusUpdated.subscribe(
        (name: string) => alert('New Status: ' + name)
      );
     }

  ngOnInit(): void {
  }
  onCreatePet(petName: string, petDesc: string, imagePath:string){
this.petService.addPet(petName, petDesc, imagePath);
  }
}
