import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { NoticeOverviewComponent } from './components/notice-overview/notice-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PostsComponent,
    HomeComponent,
    NoticeComponent,
    NoticeOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }