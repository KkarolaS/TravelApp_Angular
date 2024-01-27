import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Travel } from '../../travel.model';
import { TravelsService } from '../../../shared/travels.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-edit',
  templateUrl: './travel-edit.component.html',
  styleUrl: './travel-edit.component.css',
})
export class TravelEditComponent implements OnInit, OnDestroy {
  editTravelForm: FormGroup;
  travel: Travel;
  paramsSubsc: Subscription;

  constructor(
    private travelsService: TravelsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.travel = this.travelsService.getTravel(id);
    this.paramsSubsc = this.route.params.subscribe((params: Params) => {
      this.travel = this.travelsService.getTravel(+params['id']);
    });

    this.travelInit();
  }

  onSubmit() {}

  onCancel() {
    this.router.navigate(['../travels']);
  }

  ngOnDestroy(): void {
    this.paramsSubsc.unsubscribe();
  }
  private travelInit() {
    this.editTravelForm = new FormGroup({
      travelName: new FormControl(this.travel.name),
      startDate: new FormControl(this.travel.dateStart),
      endDate: new FormControl(this.travel.dateEnd),
      travelDescription: new FormControl(this.travel.description),
      imgUrl: new FormControl(this.travel.imageUrl),
    });
  }
}
