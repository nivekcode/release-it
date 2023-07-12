import {Component} from "@angular/core";
import {BazComponent} from "@kreuzerk/release-it-baz";

@Component({
  standalone: true,
  selector: 'release-it-bar',
  template: `
      <h1>Bar</h1>
      <release-it-baz/>
  `,
  imports: [
    BazComponent
  ]
})
export class BarComponent {
}
