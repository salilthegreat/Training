import { Component } from '@angular/core';
import { ToggleDirective } from '../../directive/toggle.directive';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ToggleDirective],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
 role:string|null = localStorage.getItem('role')
}
