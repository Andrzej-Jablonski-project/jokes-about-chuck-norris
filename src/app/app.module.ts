import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { JokeComponent } from './joke/joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    JokeComponent,
    CategoriesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
