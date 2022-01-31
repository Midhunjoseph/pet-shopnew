//import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class PetService {
  pets = [
    {
      name: 'Dog',
      desc: 'Rotweiler',
      image: 'https://image.shutterstock.com/image-photo/funny-rottweiler-puppy-sitting-on-260nw-2014167824.jpg'
    },
    {
      name: 'Fish',
      desc: 'Goldfish',
      image: 'https://3.imimg.com/data3/KC/GC/MY-8019751/half-moon-tail-betta-fish-500x500.jpg'
    },
    {
      name: 'Bird',
      desc: 'Parrot',
      image: 'https://cdn.britannica.com/s:800x450,c:crop/87/196687-138-2D734164/facts-parrots.jpg'
    },
  ];

  statusUpdated = new EventEmitter<string>();
  constructor() { }
  addPet(name: string, desc: string, image: string) {
    this.pets.push({ name: name, desc: desc, image: image });
    //this.loggingService.logStatusChange(status);
  }

  getPet() {
    return this.pets.slice();
  }

  // updateStatus(id: number, name: string) {
  //   this.pets[id].name = name;
  //   this.loggingService.logStatusChange(name);
  // }
}
