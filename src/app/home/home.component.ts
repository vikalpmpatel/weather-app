import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy{

  current:any
  cityName:any
  latitude:any
  longitude:any
  forecast = []
  httpSubscription:any
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getCoordinates();
  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        this.httpSubscription = this.dataService.getCurrentWeather(this.latitude,this.longitude).subscribe(resp => {
          this.current = resp
          this.current.date = new Date()
          this.cityName = resp['name']
        })
        this.dataService.getForecastWeather(this.latitude,this.longitude).subscribe(resp => {
          this.forecast = this.formatForecast(resp)
        })
      });
    } else {
      alert("Cannot Locate User");
    }
  }

  formatForecast(resp) {
    let arr = []
    for (let i=0; i<resp['list'].length; i++) { 
      if(i<resp['list'].length-1){
        if (resp['list'][i].dt_txt.split(" ")[0] != resp['list'][i+1].dt_txt.split(" ")[0]){
          arr.push(resp['list'][i])
        }
      } else {
        arr.push(resp['list'][i])
      }
     }
    return arr
  }

  ngOnDestroy() {
    this.httpSubscription.unsubscribe()
  }

}
