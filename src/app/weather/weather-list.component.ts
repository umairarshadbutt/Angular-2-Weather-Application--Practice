import {Component, OnInit} from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from './weather';
import {WEATHER_ITEMS} from './weather-data'
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
        <weather-item *ngFor=" let weatherItem of weatherItems; let index=index">
       
        </weather-item>        
        </section>
    `,
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    ngOnInit():any {
        this.weatherItems = WEATHER_ITEMS;
    }
}