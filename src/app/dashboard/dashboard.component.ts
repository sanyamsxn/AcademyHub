import { Component, inject, OnInit } from '@angular/core';
import { FilesListsComponent } from './files-lists/files-lists.component';
import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilesListsComponent, FiltersComponent,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit{
  private http = inject(HttpClient);
  files: any[] = [];

  ngOnInit(): void {
    
  }

  //load most downloaded files
  loadMostDownloaded(): void {
    this.http.get<any[]>('http://localhost:3000/api/files/most-downloaded').subscribe({
      next: (res) => {
        this.files = res;
      },
      error: (err) => {
        console.error('Failed to load most downloaded files:', err);
      }
    });
  }
}
