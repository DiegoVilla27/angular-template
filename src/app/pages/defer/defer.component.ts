import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'template-defer',
  standalone: true,
  imports: [UsersComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {

  public readonly exampleBasic: string = `
    @defer {
      <template-users />
    } @placeholder {
      <p>Loading component users...</p>
    }
  `;

  public readonly exampleTimer: string = `
    @defer (on timer(5s)) {
      <template-users />
    } @placeholder {
      <p>Loading component users...</p>
    }
  `;

  public readonly exampleInteraction: string = `
    @defer (on interaction(button)) {
      <template-users />
    } @placeholder {
      <button #button>Init users</button>
    }
  `;
}
