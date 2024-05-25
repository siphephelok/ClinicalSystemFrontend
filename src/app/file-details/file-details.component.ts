import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit{
  @Input() fileName: string = '';
  fileContent: Blob | null = null;
  metadata: any = null;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.loadFile();
    this.loadMetadata();
  }

  loadFile(): void {
    this.fileService.getFile(this.fileName).subscribe(
      data => {
        this.fileContent = data;
      },
      error => {
        console.error('Error fetching file content', error);
      }
    );
  }

  loadMetadata(): void {
    this.fileService.getFileMetadata(this.fileName).subscribe(
      data => {
        this.metadata = data;
      },
      error => {
        console.error('Error fetching file metadata', error);
      }
    );
  }
}
