import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Travel } from '../travels/travel.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  addingParticipant: boolean = false;
  addTravelForm: FormGroup;
  participantAdded: boolean = false;

  constructor(
    private travelsService: TravelsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onAddParticipant() {
    this.addingParticipant = true;
  }

  onSaveParticipant() {
    this.addingParticipant = false;
  }

  ngOnInit(): void {
    this.addTravelForm = new FormGroup({
      travelName: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, [Validators.required]),
      travelDescription: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null),
    });
  }

  onSubmit() {
    const newTravel = new Travel(
      this.addTravelForm.value['travelName'],
      this.addTravelForm.value['startDate'],
      this.addTravelForm.value['endDate'],
      this.addTravelForm.value['travelDescription'],
      this.addTravelForm.value['imgUrl'],
      this.addTravelForm.value['participants']
    );
    this.travelsService.addTravel(newTravel);
    this.router.navigate(['/travels'], { relativeTo: this.route });
  }
}
