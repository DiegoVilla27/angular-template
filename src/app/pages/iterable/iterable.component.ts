import { Component } from '@angular/core';

const TECHNOLOGIES: string[] = [
  'Angular',
  'React',
  'Vue',
  'Svelte'
];

@Component({
  selector: 'template-iterable',
  standalone: true,
  imports: [],
  templateUrl: './iterable.component.html',
  styleUrl: './iterable.component.scss'
})
export class IterableComponent {

  public technologies: string[] = TECHNOLOGIES;

  public readonly example: string = `
    @for (tech of technologies; track tech; let i = $index) {
      <li>{{ (i + 1) + ' - ' + tech }}</li>
    } @empty {
      <p>Not results...</p>
    }
  `;

  loadTechnologies(): void {
    this.technologies = TECHNOLOGIES;
  }

  toggleTechnologies(): void {
    this.technologies = this.technologies.length > 0 ? [] : TECHNOLOGIES;
  }
}
