import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { hour } from './day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private weatherService: WeatherService) {
  }

  title = 'hack';
  d = new Date(); //today's date

  selected: number = 0;
  currentTab : String = "daily";

  search_error: boolean = false;
  temp: number = 0;
  search_visible: boolean = false;

  week: day[] = [
   
  ];


  see() 
  {
    this.search_visible = true;
  }

  submit(value: string) {
     if (value.length < 4 || Number(value) < 501 || Number(value) > 99950) {
        this.search_error = true;
        return;
     }
  }

  switchTabs(curr : string) {
    this.currentTab = curr;
  }

  getTemp() {
    this.weatherService.getTemp().subscribe(temp => 
      {
        let day: hour[] = [];
        for (let i = 0; i < 24 - this.d.getHours(); i++) {
          let hour = {} as hour;
          hour.temp = temp[i].temp;
          hour.wind_spd = temp[i].wind_spd;
          day.push(hour);
        }
        this.week.push(day);
        for ()
      }  
    );
  }

  ngOnInit() {
    this.getTemp();
  }

}
