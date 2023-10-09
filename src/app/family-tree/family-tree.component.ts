import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FamilyNode, getFamily, getMyFamily } from '../model/family-node';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyTreeComponent implements OnInit {

  showX = "0px";
  showY = "0px";
  x = 0;
  y = 0;

  data: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { 
    this.data = this.sanitizer.bypassSecurityTrustHtml('<div class="tree"> <ul>' + this.generate(getMyFamily()) + '</ul> </div>');
    console.log(this.data);
  }

  ngOnInit(): void {
   
      //this.data = this.sanitizer.sanitize(res);
      /* OR */
      
  

    //this.data = ; 
  }

  generate(node:FamilyNode){
    let string = '<li> <a>' + node.name +'</a>';
    console.log(node);
    if(node.child.length > 0){
      string = string + '<ul>';
    }
    node.child.forEach(child => {
      string = string + this.generate(child);
    });
    if(node.child.length > 0){
      string = string + '</ul>';
    }

    string = string + "</li>";
    return string;
  }



  zoomIn(){
    this.x = this.x  - 10;
    this.y = this.y  - 10;
    this.showX = this.x + "px";
    this.showY = this.y + "px";
  }

  zoomOut(){
    this.x = this.x  + 10;
    this.y = this.y  + 10;
    this.showX = this.x + "px";
    this.showY = this.y + "px";
  }

  dragStartX = 0;
  dragStartY = 0;

  onDragStart(event: DragEvent) {
    console.log(`starting`, event);
    this.dragStartX = event.x;
    this.dragStartY = event.y;
    // Hide dragged element
    //event.target.style.opacity = 0;
  }
  
  onDragEnd(event: DragEvent) {
    console.log('drag end', event);
    this.x = this.x  + (event.x - this.dragStartX);
    this.y = this.y  + (event.y - this.dragStartY);
    this.showX = this.x + "px";
    this.showY = this.y + "px";
    console.log(this.showX, this.showY);

    // Show dragged element again
    //event.target.style.opacity = 1;
  }

  height = 100;
  width = 100;

  scroll(event: Event){
    console.log(event);
    const target = event.target as HTMLElement;
    const y = target.scrollTop;
  }

}
