import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SpaceXLaunch {
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch_small: string;
  };

}

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {

  launches: SpaceXLaunch[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<SpaceXLaunch[]>('https://api.spacexdata.com/v3/launches').subscribe((data) => {
      this.launches = data;
    });
  }

}
