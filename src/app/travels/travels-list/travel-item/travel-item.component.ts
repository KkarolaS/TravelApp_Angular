import { Component, Input } from '@angular/core';
import { Travel } from '../../travel.model';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrl: './travel-item.component.css',
})
export class TravelItemComponent {
  @Input() travel: Travel;
  @Input() index: number;
}
