import { Component, Input, OnInit } from '@angular/core';
import * as listSeriesMovies from 'src/assets/json/series-movies.json';
import { EventService } from 'src/core/service/eventService.service';
import { FilterNameService } from 'src/core/service/filterName.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  @Input() typeList: string;

  public listData = [];
  public listDataBackup = [];
  public isFilter: boolean = false;
  public typeProgram: string;
  public pagination = [];
  public drawListData = [];
  public index: number = 6;
  public pagIndex: number = 0;
  public numberPag: number = 1;

  constructor(
    private filterNameService: FilterNameService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    let listsData = listSeriesMovies[0].entries;
    this.listData = listsData.filter(element => element.programType === 'series');
    this.listDataBackup = this.listData;
    this.typeProgram = this.typeList;
    this.eventService.isFilter.subscribe(response => {
      this.isFilter = response;
    })
    this.paginationMethod();
    this.drawList();
  }

  keyEvent(event: any) {
    this.listData = this.filterNameService.filter(event.target.value, this.listDataBackup);
    this.paginationMethod();
    this.drawList();
  }

  paginationMethod() {
    this.pagination = [];
    if (this.listData.length > 6) {
      let index = 1;
      let id = 6;
      for (let i = id; id < this.listData.length; id) {
        this.pagination.push([id, index]);
        id = id + 6;
        index = index + 1;
      }
    } else {
      this.pagination = [this.listData.length, 1];
    }
  }

  clickPag(pag: number, numPag: number) {
    this.index = pag;
    this.numberPag = numPag;
    this.drawList();
  }

  drawList() {
    this.drawListData = [];
    if (this.listData.length > 6) {
      let ind = this.index - 6;
      let limit = this.index;
      for (let i = ind; i < limit; i++) {
        this.drawListData.push(this.listData[i]);
      }
    } else {
      this.drawListData = this.listData;
    }
  }

}
