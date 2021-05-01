import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    HomeComponent,
    ReposComponent,
    UserInfoComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
