import {Component} from "@angular/core";
import {BazComponent} from "@kreuzerk/release-it-baz";

@Component({
  standalone: true,
  selector: 'release-it-foo',
  template: `
      <h1>Improve foo</h1>
      <release-it-baz/>
  `,
  imports: [
    BazComponent
  ]
})
export class FooComponent {
}
