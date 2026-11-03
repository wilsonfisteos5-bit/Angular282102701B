import { DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [RouterModule],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  private readonly document = inject(DOCUMENT);

  moduleName = input('');

  closeSidebarOnMobile(): void {
    const viewportWidth = this.document.defaultView?.innerWidth;

    if (viewportWidth !== undefined && viewportWidth <= 991.98) {
      this.document.body.classList.remove('sidebar-open');
      this.document.body.classList.add('sidebar-collapse');
    }
  }
}
