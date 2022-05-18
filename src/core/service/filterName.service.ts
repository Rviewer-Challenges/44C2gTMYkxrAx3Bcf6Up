import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FilterNameService {
    constructor() {}

    public filter (value: string, backup: any) {      
      return  (value !== '') ? backup.filter(element => element.title.toUpperCase().includes(value.toUpperCase())) : backup;
    }
}