import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, HostListener } from '@angular/core';
import { PageService } from './services/page-service';
import { PageConstants } from './models/page-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'intiser_portfolio';

  PageConstants = PageConstants;

  @ViewChild('home')
  home: ElementRef;

  @ViewChild('experience')
  experience: ElementRef;

  @ViewChild('study')
  study: ElementRef;

  @ViewChild('about')
  about: ElementRef;

  @ViewChild('contact')
  contact: ElementRef;

  showX = "100px";
  showY = "100px";

  @ViewChild('child') child:ElementRef;


  constructor(private pageService:PageService){
    
  }

  ngOnInit(): void {

    let cursorRounded = document.querySelector('.rounded');

    window.addEventListener('mousemove', (e:any)=>{
      console.log(event);

      this.showX = (e.x - 50) + "px";
      this.showY = (e.y - 50) + "px";

    });

    this.pageService.getSelectedPage().
      subscribe((result)=>{
        console.log(result);
        console.log(this.about);
          if(result === PageConstants.ABOUT){
            this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          if(result === PageConstants.HOME){
            this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
          } 
          if(result === PageConstants.EXPERIENCE){
            this.experience.nativeElement.scrollIntoView({ behavior: 'smooth' });
          } 
          if(result === PageConstants.STUDY){
            this.study.nativeElement.scrollIntoView({ behavior: 'smooth' });
          } 
          if(result === PageConstants.CONTACT){
            this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }  

      });
  }

  scroll(target: HTMLElement){
    target.scrollIntoView();
  }

  onActivate(e:any){
    console.log(e);
  }


  onScroll(e:Event){
    
    console.log(e);
    //console.log(this.about);
    //console.log(window.scrollbars);
    //console.log(this.about);
    //console.log(window.);
   //document.getElementById("first")?.addEventListener("");
    
  }

  onElementView(e:any){
    //console.log(e);
  }

  @HostListener('window:mouseMoving', ['$event'])
  onElementView1(e:any){
    console.log(e);
  }




}
