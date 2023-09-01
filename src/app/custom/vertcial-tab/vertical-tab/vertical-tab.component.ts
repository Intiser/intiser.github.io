import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.scss']
})
export class VerticalTabComponent implements OnInit {

  @Input() label:string;

  constructor() { }

  ngOnInit(): void {
  }

}
