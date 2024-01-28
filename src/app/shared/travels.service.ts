import { Subject } from 'rxjs';
import { Participant } from '../travels/participant.model';
import { Travel } from '../travels/travel.model';

export class TravelsService {
  travelsChanged = new Subject<Travel[]>();

  travels: Travel[] = [
    new Travel(
      'Barcelona',
      '2023-02-12',
      '2023-01-16',
      '4 days trip to visit escape rooms in Barcelona',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1qAliPBVb0bLEovlcRKJ-ZUiSpGdPVtZMw&usqp=CAU',
      [
        new Participant('Rafael', 'Kowal', 'rraf@gmail.com'),
        new Participant('Karola', 'Kowal', 'kakrka@gmail.com'),
      ]
    ),
    new Travel(
      'Berlin',
      '2023-04-22',
      '2023-04-25',
      '3 days trip to visit museums in Berlin',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMey6HB_ggd0M_E7n3KXxtHgrJpIimp1Tog&usqp=CAU',
      [
        new Participant('Marek', 'Duda', 'dudu@gmail.com'),
        new Participant('Kasia', 'Duda', 'dudud@gmail.com'),
      ]
    ),
  ];

  getTravels() {
    return this.travels.slice();
  }

  getTravel(id: number) {
    return this.travels[id];
  }

  addTravel(travel: Travel) {
    this.travels.push(travel);
  }

  changeTravel(index: number, travel: Travel) {
    this.travels[index] = travel;
    this.travelsChanged.next(this.travels.slice());
  }

  deleteTravel(index: number) {
    this.travels = this.travels.filter((item, id) => {
      return id !== index;
    });
    this.travelsChanged.next(this.travels.slice());
  }
}
