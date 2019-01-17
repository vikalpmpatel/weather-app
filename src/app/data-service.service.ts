import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  apiKey = 'f550059754ae8f55188b01300e8ec3b8'
  units = 'imperial'
  
  constructor(private http:HttpClient) {
  }
  
  getCurrentWeather(lat, lng) {
    let currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + this.apiKey + "&units=" + this.units
    return this.http.get(currentWeatherUrl)
  }

  getForecastWeather(lat, lng) {
    let currentWeatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + this.apiKey + "&units=" + this.units
    return this.http.get(currentWeatherUrl)
  }
  
}
