import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  constructor(private location: Location) {}
  
  goBack() {
    this.location.back();
  }
}
