import { Component, OnDestroy, OnInit } from '@angular/core';
import { Travel } from '../travel.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TravelsService } from '../../shared/travels.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.css',
})
export class TravelDetailsComponent implements OnInit, OnDestroy {
  travel: Travel;
  paramsSubscription: Subscription;
  editingParticipants: boolean = false;
  editMode: boolean = false;
  editingParticipantId: number;
  participantsEmpty: boolean = true;

  participantForm: FormGroup;

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

    if (this.travel.participants.length === 0) {
      this.participantsEmpty = true;
    } else {
      this.participantsEmpty = false;
    }

    this.participantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onParticipnatEdit(index: number) {
    this.editingParticipants = true;
    this.editMode = true;
    const participant = this.travel.participants[index];
    this.editingParticipantId = index;
    this.participantForm.setValue({
      name: participant.name,
      surname: participant.surname,
      email: participant.email,
    });
  }

  onParticipantDelete(id: number) {
    this.travel.participants = this.travel.participants.filter(
      (item, index) => {
        return index !== id;
      }
    );
  }

  onAddingParticipant() {
    this.editingParticipants = true;
    this.editMode = false;
  }

  onCancel() {
    this.editingParticipants = false;
    this.editMode = false;
    this.participantForm.reset();
  }

  onParticipantSubmit() {
    if (this.editMode) {
      this.travel.participants[this.editingParticipantId] =
        this.participantForm.value;
    } else {
      this.travel.participants.push(this.participantForm.value);
    }
    this.participantForm.reset();
    this.editingParticipants = false;
    this.editMode = false;
    this.participantsEmpty = false;
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
