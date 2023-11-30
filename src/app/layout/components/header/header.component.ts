import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public activeCategoryButton: boolean = false;

  toggleCategoryButton(): void {
    this.activeCategoryButton = !this.activeCategoryButton;
  }
}
