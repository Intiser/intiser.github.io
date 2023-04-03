import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intiser_portfolio';
  constructor(){
    
  }

  scroll(target: HTMLElement){
    target.scrollIntoView();
  }

}
