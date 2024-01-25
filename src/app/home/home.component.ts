import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private travelsService: TravelsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addTravelForm = new FormGroup({
      travelName: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      travelDescription: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null),
      participants: new FormArray([]),
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

  onAddParticipant() {
    this.addingParticipant = true;
    (<FormArray>this.addTravelForm.get('participants')).push(
      new FormGroup({
        name: new FormControl('Ada'),
        surname: new FormControl(null),
        email: new FormControl(null),
      })
    );
  }

  onDeleteParticipant(index: number) {
    (<FormArray>this.addTravelForm.get('participants')).removeAt(index);
  }

  get controls() {
    return (<FormArray>this.addTravelForm.get('participants')).controls;
  }
}
