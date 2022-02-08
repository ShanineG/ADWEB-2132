import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GradebookComponent } from './gradebook/gradebook.component';

@NgModule({
  declarations: [
    AppComponent,
    GradebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //from FormsModule import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

