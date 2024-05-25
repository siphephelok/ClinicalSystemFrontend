import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private fileService: FileService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.fileService.upload(this.selectedFile).subscribe(
        response => {
          console.log('File uploaded successfully', response);
        },
        error => {
          console.error('Error uploading file', error);
        }
      );
    }
  }
}
