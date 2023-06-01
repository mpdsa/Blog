import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticeComponent } from './pages/notice/notice.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'noticia',
  component: NoticeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
