import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WeatherItemComponent} from "./weather/weather-item.component";
import {WeatherListComponent} from "./weather/weather-list.component";


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
