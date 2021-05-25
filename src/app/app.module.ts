import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { JokeService } from './services/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { FormsModule } from '@angular/forms';
import { JokeComponent } from './components/joke/joke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    CategoriesComponent,
    DownloaderComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
