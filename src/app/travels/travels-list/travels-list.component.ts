import { Component, OnDestroy, OnInit } from '@angular/core';
import { TravelsService } from '../../shared/travels.service';
import { Travel } from '../travel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrl: './travels-list.component.css',
})
export class TravelsListComponent implements OnInit, OnDestroy {
  travels: Travel[] = [];
  subscription: Subscription;

  constructor(
    private travelsService: TravelsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.travels = this.travelsService.getTravels();
    this.subscription = this.travelsService.travelsChanged.subscribe(
      (travels: Travel[]) => {
        this.travels = travels;
      }
    );
  }

  onAddTravel() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
