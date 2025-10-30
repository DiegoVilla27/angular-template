import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { List } from 'immutable';

interface IMenu {
  title: string;
  path: string;
}

@Component({
  selector: 'template-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public readonly menu: List<IMenu> = List([
    { title: 'Conditionals', path: '/conditionals' },
    { title: 'Iterable', path: '/iterable' },
    { title: 'Cases', path: '/cases' },
    { title: 'Defer', path: '/defer' }
  ]);
}
