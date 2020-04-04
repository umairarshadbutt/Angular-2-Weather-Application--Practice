import {Component} from '@angular/core';
import {WeatherItemComponent} from "./weather-item.component";
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item></weather-item>
        </section>
    `,
})
export class WeatherListComponent {

}