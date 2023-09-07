import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, HostListener } from '@angular/core';
import { PageService } from './../services/page-service';
import { PageConstants } from './../models/page-constants';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fromEvent} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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

  @ViewChild('element')
  element: ElementRef;

  showX = "100px";
  showY = "100px";

  webpotrait = false;

  @ViewChild('child') child:ElementRef;

  constructor(private pageService:PageService,
    private breakpointObserver:BreakpointObserver) { }

  ngOnInit(): void {

    console.log(this.about);
    //console.log(this.disableScrollListerner);
    //console.log(this.disableScrollListerner);
    // fromEvent(window, 'scroll', { capture: true }).subscribe((event)=>{
    //   // console.log(event);
    //   // console.log(window.scrollX, window.scrollY);
    //   // console.log(window.pageYOffset);
    // });

    fromEvent(window, 'scroll', { capture: true }).subscribe((event) => {
      // Get the scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;
      //console.log('Scroll Position:', scrollPosition);

      // You can perform actions based on the scroll position here
    });

    this.breakpointObserver.observe([Breakpoints.Handset, 
      Breakpoints.Tablet, 
      Breakpoints.Web,
      Breakpoints.WebPortrait, 
      Breakpoints.WebLandscape]).
      subscribe((result)=>{
        this.webpotrait = false;
        if(result.breakpoints[Breakpoints.WebPortrait] == true){
          this.webpotrait = true;
        }
        console.log(this.webpotrait);
      });

    let cursorRounded = document.querySelector('.rounded');

    window.addEventListener('mousemove', (e:any)=>{
      //console.log(event);

      this.showX = (e.x - 300) + "px";
      this.showY = (e.y - 300) + "px";

    });

    this.pageService.getSelectedPage().
      subscribe((result)=>{
        console.log(result);
        console.log(this.about);
          if(result === PageConstants.ABOUT){
            // this.about.nativeElement.scrollIntoView({ behavior: 'smooth' }, ()=>{
            //   console.log("scroll done");
            // });
            this.scroll(this.about.nativeElement);
          }
          if(result === PageConstants.HOME){
            //this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
            
            this.scroll(this.home.nativeElement);
          } 
          if(result === PageConstants.EXPERIENCE){
            //this.experience.nativeElement.scrollIntoView({ behavior: 'smooth' });
            this.scroll(this.experience.nativeElement);
          } 
          if(result === PageConstants.STUDY){
            //this.study.nativeElement.scrollIntoView({ behavior: 'smooth' });
            this.scroll(this.study.nativeElement);
          } 
          if(result === PageConstants.CONTACT){
            //this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
            this.scroll(this.contact.nativeElement);
          }  

      });
  }

  disableScrollListerner = false;

  scroll(target: any){
    this.disableScrollListerner = true;
    console.log(this.disableScrollListerner);
    target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(()=>{
      this.disableScrollListerner = false;
    }, 1000);
    //console.log(this.disableScrollListerner);
  }

  deactivateGone(){

  }

  

  onActivate(e:any){
    console.log(e);
  }


  onScroll(event:Event){
    console.log(this.disableScrollListerner);
    //console.log(this.about.nativeElement.offsetHeight);
    if(this.disableScrollListerner){
      return;
    }
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollHeight - target.scrollTop;
    const offsetY = 360; 
    //console.log(scrollPosition, target.scrollHeight, target.scrollTop);
    //console.log(target.scrollTop,  window.innerHeight);
    const aboutH = this.about.nativeElement.offsetHeight;
    const experienceH = this.experience.nativeElement.offsetHeight;
    const educationH = this.study.nativeElement.offsetHeight;

    const y = target.scrollTop;
    const wy = window.innerHeight
    if(y > (aboutH - (100) ) && y < (aboutH + experienceH - offsetY)){
      this.pageService.setScrolledPageSubject(PageConstants.EXPERIENCE);
    }
    else if(y > (aboutH + experienceH - offsetY) && y < (3 * wy - offsetY)){
      this.pageService.setScrolledPageSubject(PageConstants.STUDY);
    }
    // else if(y > (wy * 3 - offsetY) && y < (4 * wy - offsetY)){
    //   this.pageService.setScrolledPageSubject(PageConstants.CONTACT);
    // }
    else{
      this.pageService.setScrolledPageSubject(PageConstants.ABOUT);
    }

    
  }

  onElementView(e:any){
    //console.log(e);
  }

  // @HostListener('window:mouseMoving', ['$event'])
  // onElementView1(e:any){
  //   console.log(e);
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScrollTry(event: Event): void {
  //   // You can continue to listen for scroll events in this method if needed.
  //   // Get the scroll position
  //   const scrollPosition = window.scrollY || window.pageYOffset;
  //   console.log('Scroll Position:', scrollPosition);

  //   // You can perform actions based on the scroll position here
  // }


}
