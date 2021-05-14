import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { JokeComponent } from './joke/joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloaderComponent } from './downloader/downloader.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    JokeComponent,
    CategoriesComponent,
    InputComponent,
    ButtonComponent,
    DownloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
