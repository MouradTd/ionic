import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private title = new BehaviorSubject('');
    currentTitle = this.title.asObservable();

    constructor() { }

    changeTitle(title: string) {
        this.title.next(title);
    }
}