import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {BarComponent} from "@kreuzerk/release-it-bar";
import {FooComponent} from "@kreuzerk/release-it-foo";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BarComponent, FooComponent],
  selector: 'release-it-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'release-it';
}
