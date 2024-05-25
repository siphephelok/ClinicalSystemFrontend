import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: string[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.listFiles().subscribe(
      (data: string[]) => {
        this.files = data;
      },
      error => {
        console.error('Error fetching file list', error);
      }
    );
  }

  onDownload(fileName: string): void {
    this.fileService.getFile(fileName).subscribe(
      (data: Blob) => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => {
        console.error('Error downloading file', error);
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
