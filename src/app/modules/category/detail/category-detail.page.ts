import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../core/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../core/interfaces';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-detail.page.html',
  styles: []
})
export class CategoryDetailPage {

  public category?: Category;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      const slug = p['slug'];
      if (slug) {
        this.getCategory(slug);
      }
    })
  }

  getCategory(slug: string): void {
    this.categoryService.getBySlug(slug).subscribe(res => this.category = res);
  }

}
