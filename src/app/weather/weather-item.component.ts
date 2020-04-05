import {Component} from '@angular/core';
import {WeatherItem} from "./weather"

@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.discription}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{weatherItem.temprature}}°C</span>
            </div>
        </article>
    `,
    styleUrls: ['./weather-item.css'],
})
export class WeatherItemComponent {
    weatherItem: WeatherItem;

    
}