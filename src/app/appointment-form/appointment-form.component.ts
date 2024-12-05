import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card"
import { MatFormField } from "@angular/material/form-field"
import { MatInput} from "@angular/material/input"

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ CalendarComponent, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormField, MatInput ],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {

}
