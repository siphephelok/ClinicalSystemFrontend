import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileDetailsComponent } from './file-details/file-details.component';

const routes: Routes = [
  { path: 'upload', component: FileUploadComponent },
  { path: 'files', component: FileListComponent },
  { path: 'files/:name', component: FileDetailsComponent },
  { path: '', redirectTo: '/files', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
