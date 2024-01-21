import { Component, OnDestroy, OnInit } from '@angular/core';
import { Travel } from '../travel.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TravelsService } from '../../shared/travels.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.css',
})
export class TravelDetailsComponent implements OnInit, OnDestroy {
  travel: Travel;
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private travelsService: TravelsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.travel = this.travelsService.getTravel(id);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.travel = this.travelsService.getTravel(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
