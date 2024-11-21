import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlComponent } from "../../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // Check out the template! We're passing our input elements to our function as
  // arguments there!
  onSubmit(ticketTitle: string, ticketText: string) {
    const enteredTitle = ticketTitle;
    console.log(enteredTitle);
  };
};