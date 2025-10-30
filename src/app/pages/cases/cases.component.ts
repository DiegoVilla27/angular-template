import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ISelect {
  value: string;
  label: string;
}

@Component({
  selector: 'template-cases',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent {

  public roles: ISelect[] = [
    { value: 'admin', label: 'Administrator' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' }
  ];
  public roleSelected: string = this.roles[0].value;

  public readonly example: string = `
    @switch (roleSelected) {
      @case ('admin') {
        <p>Admin panel</p>
      }
      @case ('user') {
        <p>User panel</p>
      }
      @default {
        <p>Unknown rol</p>
      }
    }
  `;
}
