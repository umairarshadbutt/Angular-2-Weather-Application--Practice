import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
`
    <header>
      <h1>Angular 2 Weather Application</h1>
    </header>


    <weather-list></weather-list>
`
})
export class AppComponent {
  title = 'app works!';
}
