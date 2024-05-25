import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'http://localhost:5118/api';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('PatientFile', file, file.name);
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getFile(name: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/get`, { responseType: 'blob', params: new HttpParams().set('name', name) });
  }

  deleteFile(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`, { params: new HttpParams().set('name', name) });
  }

  listFiles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/list`);
  }

  downloadFile(name: string, filePath: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/download`, { params: new HttpParams().set('name', name).set('filePath', filePath) });
  }

  updateFile(name: string, content: Blob): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, content, { params: new HttpParams().set('name', name) });
  }

  getFileMetadata(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/metadata`, { params: new HttpParams().set('name', name) });
  }
}
