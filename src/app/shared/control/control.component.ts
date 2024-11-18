import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // Adding the encapsulation setting so that we can use angular's 'ViewEncapsulation'
  // feature which we call .none on which disables css style scoping (encapsulation) because we have
  // several CSS styles in our .css file that actually need to be global (the "Title"
  // and "Request" inputs)
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  label = input.required<string>();
};