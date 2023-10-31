import { Component } from '@angular/core';

@Component({
  selector: 'data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent {
  stringInterpolation = 'This is string interpolation!';
  btnDisabled = true;

  changeStringInterpolation($event: any) {
    this.stringInterpolation = "This is the text from the Input: " + $event.target.value;
    this.btnDisabled = false;
  }
}
