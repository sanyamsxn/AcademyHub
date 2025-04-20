import { Component } from '@angular/core';
import { FilesListsComponent } from './files-lists/files-lists.component';
import { FiltersComponent } from './filters/filters.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilesListsComponent, FiltersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
