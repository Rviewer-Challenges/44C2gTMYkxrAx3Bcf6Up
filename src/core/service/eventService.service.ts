import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EventService {
    constructor() {}

    public isFilter: EventEmitter<any> = new EventEmitter();
}