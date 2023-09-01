import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, OnInit, Query, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { VerticalTabComponent } from '../vertical-tab/vertical-tab.component';

@Component({
  selector: 'app-vertical-tab-list',
  templateUrl: './vertical-tab-list.component.html',
  styleUrls: ['./vertical-tab-list.component.scss']
})
export class VerticalTabListComponent implements AfterContentInit, OnInit {

  // @ContentChildren(VerticalTabComponent) 
  // tabs: QueryList<VerticalTabComponent>;

  // @ViewChild(TabDerective, {static: false}) 
  // content: TabDerective; 

  tabsList:VerticalTabComponent[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    // console.log(this.tabs);
    // this.tabs.forEach((tab)=>{
    //   this.tabsList.push(tab);
    // });
  }

  selectTab(tab:VerticalTabComponent){
    // console.log(this.content);
    // const viewContainerRef = this.content.viewContainerRef;
    // viewContainerRef.clear();
    // type = Type<VerticalTabComponent>;
    // const componentRef = viewContainerRef.createComponent<VerticalTabComponent>();
    // this.content.createComponent.viewContainerRef

    //this.content.createComponent(tab)
    // this.content.nativeElement.children.push(tab);
  }

}
