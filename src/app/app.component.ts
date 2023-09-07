import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, HostListener } from '@angular/core';
import { PageService } from './services/page-service';
import { PageConstants } from './models/page-constants';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fromEvent} from 'rxjs';
import { ThemeService } from './services/theme-service';
import { ThemeConstants } from './services/theme-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'intiser_portfolio';

  


  constructor(private pageService:PageService,
              private breakpointObserver:BreakpointObserver,
              private themeService:ThemeService){
    
  }

  ngOnInit(): void {
    let styles_dark = [
      { name: 'background-color', value: "#1a1c18" },
      { name: 'on-background-color', value: "#e3e3dc" },
      { name: 'surface-color', value: "#1a1c18" },
      { name: 'on-surface-color', value: "#e3e3dc" },

      { name: 'on-background-color-70', value: "#e3e3dcb4" },
        //   background-color: #1a1c18;
        // --on-background-color: #e3e3dc;
        // --surface-color: #1a1c18;
        // --on-surface-color:#e3e3dc;

       // --on-background-color-70: #e3e3dcb4;

      

      { name: 'primary-color', value: "#98d781" },
      { name: 'on-primary-color', value: "#073900" },
      { name: 'primary-container-color', value: "#1a520c" },
      { name: 'on-primary-container-color', value: "#b3f39b" },

      { name: 'primary-container-color-alpha', value: "#1a520c33" },
       // --primary-color: #98d781;
      // --on-primary-color: #073900;
      // --primary-container-color: #1a520c;
      // --on-primary-container-color: #b3f39b;

      // --primary-container-color-alpha: #1a520c33;

      { name: 'secondary-color', value: "#bccbb1" },
      { name: 'on-secondary-color', value: "#273421" },
      { name: 'secondary-container-color', value: "#3d4b36" },
      { name: 'on-secondary-container-color', value: "#d7e7cc" },
      // --secondary-color: #bccbb1;
      // --on-secondary-color: #273421;
      // --secondary-container-color: #3d4b36;
      // --on-secondary-container-color: #d7e7cc;

      { name: 'tertiary-color', value: "#a0cfd1" },
      { name: 'on-tertiary-color', value: "#003739" },
      { name: 'tertiary-container-color', value: "#1e4e50" },
      { name: 'on-tertiary-container-color', value: "#bcebed" },

      // --tertiary-color: #a0cfd1;
      // --on-tertiary-color: #003739;
      // --tertiary-container-color: #1e4e50;
      // --on-tertiary-container-color: #bcebed;

      { name: 'error-color', value: "#ffb4ab" },
      { name: 'on-error-color', value: "#690005" },
      { name: 'error-container-color', value: "#93000a" },
      { name: 'on-error-container-color', value: "#ffdad6" },

      // --error-color: #ffb4ab;
      // --on-error-color: #690005;
      // --error-container-color: #93000a;
      // --on-error-container-color: #ffdad6;

      { name: 'outline-color', value: "#8d9387" },
      { name: 'surfface-variant-color', value: "#43483f" },
      { name: 'on-surface-variant-color', value: "#c3c8bc" },

      // --outline-color: #8d9387;
  // --surfface-variant-color: #43483f;
  // --on-surface-variant-color: #c3c8bc;


    ];


    let styles_light = [
      { name: 'background-color', value: "#fdfdf6" },
      { name: 'on-background-color', value: "#1a1c18" },
      { name: 'surface-color', value: "#fdfdf6" },
      { name: 'on-surface-color', value: "#1a1c18" },

      { name: 'on-background-color-70', value: "#1a1c18" },
        //   background-color: #1a1c18;
        // --on-background-color: #e3e3dc;
        // --surface-color: #1a1c18;
        // --on-surface-color:#e3e3dc;

       // --on-background-color-70: #e3e3dcb4;

      

      { name: 'primary-color', value: "#326b23" },
      { name: 'on-primary-color', value: "#ffffff" },
      { name: 'primary-container-color', value: "#b3f49a" },
      { name: 'on-primary-container-color', value: "#032100" },

      { name: 'primary-container-color-alpha', value: "#b3f49a" },
       // --primary-color: #98d781;
      // --on-primary-color: #073900;
      // --primary-container-color: #1a520c;
      // --on-primary-container-color: #b3f39b;

      // --primary-container-color-alpha: #1a520c33;

      { name: 'secondary-color', value: "#54624d" },
      { name: 'on-secondary-color', value: "#ffffff" },
      { name: 'secondary-container-color', value: "#d7e7cc" },
      { name: 'on-secondary-container-color', value: "#121f0e" },
      // --secondary-color: #bccbb1;
      // --on-secondary-color: #273421;
      // --secondary-container-color: #3d4b36;
      // --on-secondary-container-color: #d7e7cc;

      { name: 'tertiary-color', value: "#386668" },
      { name: 'on-tertiary-color', value: "#ffffff" },
      { name: 'tertiary-container-color', value: "#bcebed" },
      { name: 'on-tertiary-container-color', value: "#002021" },

      // --tertiary-color: #a0cfd1;
      // --on-tertiary-color: #003739;
      // --tertiary-container-color: #1e4e50;
      // --on-tertiary-container-color: #bcebed;

      { name: 'error-color', value: "#ba1a1a" },
      { name: 'on-error-color', value: "#ffffff" },
      { name: 'error-container-color', value: "#ffdad6" },
      { name: 'on-error-container-color', value: "#410002" },

      // --error-color: #ffb4ab;
      // --on-error-color: #690005;
      // --error-container-color: #93000a;
      // --on-error-container-color: #ffdad6;

      { name: 'outline-color', value: "#8d9387" },
      { name: 'surfface-variant-color', value: "#43483f" },
      { name: 'on-surface-variant-color', value: "#c3c8bc" },

      // --outline-color: #8d9387;
  // --surfface-variant-color: #43483f;
  // --on-surface-variant-color: #c3c8bc;


    ];
  
  
    this.themeService.getTheme().
      subscribe((theme)=>{
          if(theme == ThemeConstants.DARK){
            styles_dark.forEach(data => {
                  console.log(`--${data.name}`);
                  document.documentElement.style.setProperty(`--${data.name}`, data.value);
            });  
          }
          else{
            styles_light.forEach(data => {
              console.log(`--${data.name}`);
              document.documentElement.style.setProperty(`--${data.name}`, data.value);
           });  
          }


      });



    
    
  }

  



}
