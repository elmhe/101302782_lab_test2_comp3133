import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearFilter = new EventEmitter<string>();

  onYearSelect(year: string) {
    this.yearFilter.emit(year);
  }
}
