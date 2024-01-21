import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  addingParticipant: boolean = false;
  addTravelForm: FormGroup;

  constructor(private travelsService: TravelsService) {}

  onAddParticipant() {
    this.addingParticipant = true;
  }

  onSaveParticipant() {
    this.addingParticipant = false;
  }

  ngOnInit(): void {
    this.addTravelForm = new FormGroup({});
  }
}
