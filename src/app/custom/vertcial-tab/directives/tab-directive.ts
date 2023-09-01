import { Directive, ViewContainerRef } from "@angular/core";

@Directive({selector: 'content'})
export class TabDerective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}