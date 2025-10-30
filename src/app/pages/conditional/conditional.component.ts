import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'template-conditional',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.scss'
})
export class ConditionalComponent {

  public userLoggedIn: boolean = false;
  
  public readonly example: string = `
    @if (condition) {
      <!-- Código a renderizar si la condición es verdadera -->
    } @else {
      <!-- Código a renderizar si la condición es falsa -->
    }
  `;
}
