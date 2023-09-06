import { Component, OnInit } from '@angular/core';
import { EducationElement } from '../models/education-element';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  tabsList:EducationElement[] = [
    {
      date:"2023 Oct - Present",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum",
      focus: false
    },
    {
      date:"2021 - 2023 Sep",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum",
      focus: false
    },
    {
      date:"2013-2017",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum",
      focus: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver(item:any){
    item.focus = true;
  }

  mouseOut(item:any){
    item.focus = false;
  }

}
