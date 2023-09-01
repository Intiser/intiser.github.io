import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Tab } from '../models/tab-element';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class ExperienceComponent implements OnInit {

  selectedTab: Tab;

  tabsList:Tab[] = [
    {
      label: "Herton GMBH",
      title: "Software Engineer Fullstack",
      date: "01.06.2022 - 31.03.2023",
      description: "description",
    },
    {
      label: "OushodSheba",
      title: "Software Engineer",
      date: "30.11.2019 - 29.06.2023",
      description: "description",
    },
    {
      label: "Southeast University",
      title: "Lecturer(Part-time)",
      date: "31.08.2018 - 30.08.2019",
      description: "description",
    },
    {
      label: "Kite Games Studio",
      title: "Software Engineer",
      date: "08.12.2017 - 29.11.2018",
      description: "description",
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectTab(this.tabsList[0])
  }

  selectTab(tab:Tab){
    this.selectedTab = tab;
  }

}
