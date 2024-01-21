import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../../shared/travels.service';
import { Travel } from '../travel.model';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrl: './travels-list.component.css',
})
export class TravelsListComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private travelsService: TravelsService) {}

  ngOnInit(): void {
    this.travels = this.travelsService.getTravels();
  }
}
