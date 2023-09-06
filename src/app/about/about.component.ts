import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  description = "Hi, my name is Syed Intiser Ahsan. I build things for the web I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm doing my masters on Automotive Software Engineering at TU Chemnitz."

  constructor() { }

  ngOnInit(): void {
  }

}
