import { Injectable, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService implements OnDestroy{


    private theme :String;
    private themeSubject = new ReplaySubject<String>(1);

    setTheme(string: String){
        this.theme = string;
        this.themeSubject.next(this.theme);
    }

    getTheme(): Observable<String> {
        return this.themeSubject;
    }


    ngOnDestroy() {

    }

} 