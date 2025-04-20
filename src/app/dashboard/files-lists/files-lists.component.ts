import { Component } from '@angular/core';
import { FileComponent } from './file/file.component';
@Component({
  selector: 'app-files-lists',
  standalone: true,
  imports: [FileComponent],
  templateUrl: './files-lists.component.html',
  styleUrl: './files-lists.component.css'
})
export class FilesListsComponent {

}
