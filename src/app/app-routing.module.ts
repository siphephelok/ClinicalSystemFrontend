import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileDeleteComponent } from './file-delete/file-delete.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
const routes: Routes = [
  { path: 'upload', component: FileUploadComponent },
  { path: 'files', component: FileListComponent },
  { path: 'files/:name', component: FileDetailsComponent },
  { path: 'delete', component: FileDeleteComponent },
  { path: 'download', component: FileDownloadComponent },
  { path: '', redirectTo: '/files', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
