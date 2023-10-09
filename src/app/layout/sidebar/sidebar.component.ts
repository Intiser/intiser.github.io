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
  selectedTheme = ThemeConstants.DARK;
  mouseOnIcon = false;


  icon_array = [
    {
      path:"../../../assets/svg/new/mail.svg",
      alter:"../../../assets/svg/new/mail_100.svg",
      light_path:"../../../assets/svg/new/mail_black.svg",
      light_alter:"../../../assets/svg/new/mail_100_black.svg",
      link:"mailto:ahsanintiser@gmail.com",
      mouse: false
    },
    {
      path:"../../../assets/svg/github.svg",
      alter:"../../../assets/svg/github_100.svg",
      light_path:"../../../assets/svg/new/github_black.svg",
      light_alter:"../../../assets/svg/new/github_100_black.svg",
      link:"https://github.com/Intiser",
      mouse: false
    },
    {
      path:"../../../assets/svg/new/instagram.svg",
      alter:"../../../assets/svg/new/instagram_100.svg",
      light_path:"../../../assets/svg/new/instagram_black.svg",
      light_alter:"../../../assets/svg/new/instagram_100_black.svg",
      link:"https://www.instagram.com/syedintiser",
      mouse: false
    },
    {
      path:"../../../assets/svg/new/linkedin.svg",
      alter:"../../../assets/svg/new/linkedin_100.svg",
      light_path:"../../../assets/svg/new/linkedin_black.svg",
      light_alter:"../../../assets/svg/new/linkedin_100_black.svg",
      link:"https://www.linkedin.com/in/syed-intiser-ahsan-b1a39411a",
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

  webpotrait = false;
  mobile = false;

  className:String =  PageConstants.ABOUT;

  constructor(private pageService:PageService,
              private breakpointObserver:BreakpointObserver, 
              private themeService:ThemeService) { 

  }

  ngOnInit(): void {

    console.log(this.selectedTheme);
    this.pageService.getScrolledPage()
      .subscribe((result)=>{
        this.className = result;
      });

      this.breakpointObserver.observe([
        Breakpoints.WebPortrait, 
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait]).
        subscribe((result)=>{
          this.webpotrait = false;
          this.mobile = false;
          if(result.breakpoints[Breakpoints.WebPortrait] == true){
            
          }
          if(result.matches){
            this.webpotrait = true;
          }
          if(result.breakpoints[Breakpoints.HandsetLandscape] == true){
            this.mobile = true;
          }
          if(result.breakpoints[Breakpoints.HandsetPortrait] == true){
            this.mobile = true;
          }
  
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

  isThisThemeDark(variable:any){
    console.log(variable);
    if(variable == ThemeConstants.DARK){
      return true;
    }
    return false;
  }

 
}
