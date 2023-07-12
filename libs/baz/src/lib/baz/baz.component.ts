import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'release-it-baz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.css'],
})
export class BazComponent {}
