import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { PageConstants } from 'src/app/models/page-constants';
import { PageService } from 'src/app/services/page-service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import { ThemeConstants } from 'src/app/services/theme-constants';
import { ThemeService } from 'src/app/services/theme-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  PageConstants = PageConstants;
  ThemeConstants = ThemeConstants;


  icon_array = [
    {
      path:"../../../assets/svg/fb_outline.svg",
      alter:"../../../assets/svg/fb_outline_100.svg",
      mouse: false
    },
    {
      path:"../../../assets/svg/github.svg",
      alter:"../../../assets/svg/github_100.svg",
      mouse: false
    },
    {
      path:"../../../assets/svg/insta_outline.svg",
      alter:"../../../assets/svg/insta_outline_100.svg",
      mouse: false
    },
    {
      path:"../../../assets/svg/linkedin_outline.svg",
      alter:"../../../assets/svg/linkedin_outline_100.svg",
      mouse: false
    },
    // {
    //   path:"../../../assets/svg/facebook.svg"
    // },
  ]

  array = [
    {
      title: "About",
      page: PageConstants.ABOUT,
      mouse: false
    },
    {
      title: "Experience",
      page: PageConstants.EXPERIENCE,
      mouse: false
    },
    {
      title: "Education",
      page: PageConstants.STUDY,
      mouse: false
    },
    // {
    //   title: "Contact",
    //   page: PageConstants.CONTACT,
    //   mouse: false
    // },
  ]


  className:String =  PageConstants.ABOUT;

  constructor(private pageService:PageService,
              private breakpointObserver:BreakpointObserver, 
              private themeService:ThemeService) { 

  }

  ngOnInit(): void {

    this.pageService.getScrolledPage()
      .subscribe((result)=>{
        this.className = result;
      });

    this.breakpointObserver.observe([Breakpoints.Handset, 
      Breakpoints.Tablet, 
      Breakpoints.Web, 
      Breakpoints.WebLandscape]).
      subscribe((result)=>{
        //console.log(result);
      });


  }

  clicked(string: any){
    this.pageService.setSelectedPageSubject(string);
    this.className =  string;
  }

  mouseOver(item:any){
    item.mouse = true;
  }

  mouseOut(item:any){
    item.mouse = false;
  }

  mouseOnIcon = false;
  selectedTheme = ThemeConstants.DARK;

  mouseOverIcon(){
    this.mouseOnIcon = true;
  }

  mouseOutIcon(){
    this.mouseOnIcon = false;
  }

  changeTheme(){
    if(this.selectedTheme == ThemeConstants.DARK){
      this.themeService.setTheme(ThemeConstants.LIGHT);
      this.selectedTheme = ThemeConstants.LIGHT;
    }
    else{
      this.themeService.setTheme(ThemeConstants.DARK);
      this.selectedTheme = ThemeConstants.DARK;
    }
  }

 
}
