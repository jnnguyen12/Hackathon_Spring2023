import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { day } from './day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private weatherService: WeatherService) {
  }

  title = 'hack';
  selected: number = 0;
  error: boolean = false;
  currentTab : String = "daily";
  d = new Date();
  temp: number = 0;
  week: day[] = [

  ];

  visible: boolean = false;

  see() 
  {
    this.visible = true;
  }

  submit(value: string) {
     if (value.length < 4 || Number(value) < 501 || Number(value) > 99950) {
        this.error = true;
        return;
     }
  }

  switchTabs(curr : string) {
    this.currentTab = curr;
  }

  getTemp() {
    this.weatherService.getTemp().subscribe(temp => 
      {
        //first day
        let day = [];
        for (let i = 0; i < 24 - this.d.getHours(); i++) {
          // day.push(temp.)
        }
        this.week.push(
          {

          }
        )
        for ()
      }  
    );
  }

  ngOnInit() {
    this.getTemp();
  }

}
