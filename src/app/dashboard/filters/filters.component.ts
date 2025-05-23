import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filters',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  courseList = [
    'MCA',
    'BTech[CS]',
    'BCA',
    'BBA',
    'BTech[EEE]',
    'MCom'
  ];

  selectedCourse: String ='';

  @Output() selectedFilter = new EventEmitter<any>();

  onCheckboxChangeEvent(event: Event, course: string) {
    this.selectedCourse = course;
    this.selectedFilter.emit(course);
  }
  
}
