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
    'BTech-CS',
    'BCA',
    'BBA',
    'MTech',
    'BTech-EEE',
    'BTech-IT'
  ];

  selectedCourses: string[] = [];

  @Output() filtersChanged = new EventEmitter<string[]>();

  onCheckboxChangeEvent(event: Event, course: string) {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
  
    if (checked && !this.selectedCourses.includes(course)) {
      this.selectedCourses.push(course);
    } else if (!checked) {
      this.selectedCourses = this.selectedCourses.filter(c => c !== course);
    }
  
    this.filtersChanged.emit(this.selectedCourses);
  }
  
}
