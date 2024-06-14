import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-delete',
  templateUrl: './file-delete.component.html',
  styleUrls: ['./file-delete.component.css']
})
export class FileDeleteComponent implements OnInit {
  files: string[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles(): void {
    this.fileService.listFiles().subscribe(
      (data: string[]) => {
        this.files = data;
      },
      error => {
        console.error('Error fetching file list', error);
      }
    );
  }

  onDelete(fileName: string): void {
    this.fileService.deleteFile(fileName).subscribe(
      response => {
        console.log('File deleted successfully', response);
        this.files = this.files.filter(file => file !== fileName);
      },
      error => {
        console.error('Error deleting file', error);
      }
    );
  }
}
