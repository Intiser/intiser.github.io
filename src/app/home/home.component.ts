import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  @ViewChild('canvas') canvas : any; 

  constructor() { 
    
    
  }

  ngOnInit(): void {
    //console.log(this.canvas as HTMLCanvasElement)
    //this.animate(this.canvas)
  }

  animate(ctx: CanvasRenderingContext2D){
    //console.log(ctx)
  }
  

}
