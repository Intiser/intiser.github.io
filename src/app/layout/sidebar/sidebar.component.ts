import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { PageConstants } from 'src/app/models/page-constants';
import { PageService } from 'src/app/services/page-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  PageConstants = PageConstants;

  constructor(private pageService:PageService) { 

  }

  ngOnInit(): void {

  }

  clicked(string: any){
    this.pageService.setSelectedPageSubject(string);
  }

}
