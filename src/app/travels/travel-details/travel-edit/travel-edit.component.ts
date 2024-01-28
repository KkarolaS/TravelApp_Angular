import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Travel } from '../../travel.model';
import { TravelsService } from '../../../shared/travels.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Participant } from '../../participant.model';

@Component({
  selector: 'app-travel-edit',
  templateUrl: './travel-edit.component.html',
  styleUrl: './travel-edit.component.css',
})
export class TravelEditComponent implements OnInit, OnDestroy {
  editTravelForm: FormGroup;
  travel: Travel;
  travelId: number;
  paramsSubsc: Subscription;

  constructor(
    private travelsService: TravelsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.travelId = +this.route.snapshot.params['id'];
    this.travel = this.travelsService.getTravel(this.travelId);
    this.paramsSubsc = this.route.params.subscribe((params: Params) => {
      this.travel = this.travelsService.getTravel(+params['id']);
    });

    this.travelInit();
  }

  onSubmit() {
    const newParticipants: Participant[] = [];
    const newTravel = new Travel(
      this.editTravelForm.value['travelName'],
      this.editTravelForm.value['startDate'],
      this.editTravelForm.value['endDate'],
      this.editTravelForm.value['travelDescription'],
      this.editTravelForm.value['imgUrl'],
      newParticipants
    );
    this.travelsService.changeTravel(this.travelId, newTravel);
  }

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
