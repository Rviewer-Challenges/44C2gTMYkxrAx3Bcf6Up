import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/core/service/eventService.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public typeLanding: string;
  public isFilter:boolean = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.typeLanding = 'landing'
  }

  changeProgramType(type:string) {
    this.isFilter = type !== this.typeLanding ? false: this.isFilter;
    this.typeLanding = type;
  }

  onClickFilter(){
    this.isFilter = !this.isFilter;
    this.eventService.isFilter.emit(this.isFilter);
  }

}
