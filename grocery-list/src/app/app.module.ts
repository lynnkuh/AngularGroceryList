import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from '../app/app-grocery/app-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    AppGroceryComponent]
})
export class AppModule { }
