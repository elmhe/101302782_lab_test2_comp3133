import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private REST_API_URL = "https://api.spacexdata.com/v3/launches"

  constructor(private httpClient: HttpClient) { }

  public getAllMission() {
    return this.httpClient.get(this.REST_API_URL).pipe(retry(3))
  }  
}
