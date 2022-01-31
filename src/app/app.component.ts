import { Component } from '@angular/core';
import { PetService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  loadedFeature = 'login';
  // pets: { name: string, desc: string, image: string }[] = [];
  // constructor(private petService: PetService) { }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  // ngOnInit() {
  //   this.pets = this.petService.pets;
  // }

}
