import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from '../network/spacexapi.service';
import { SpaceXLaunch } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {

  launches: SpaceXLaunch[] = [];
  filteredLaunches: SpaceXLaunch[] = [];

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.networkService.getAllMission()
    .subscribe({
      next: (data: any) => {
        // console.log(data)
        this.launches = data
        this.filteredLaunches = data;
      },
      complete: () => {
        console.log('Complete')
      },
      error: () => {
        console.log('Error')
      }
    })
  }

  onYearFilter(year: string) {
    this.filteredLaunches = this.launches.filter((launch) => launch.launch_year === year);
  }

}
