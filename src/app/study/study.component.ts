import { Component, OnInit } from '@angular/core';
import { EducationElement } from '../models/education-element';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  data:EducationElement[] = [
    {
      to:"ongoing",
      from:"01-10-2021",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum"
    },
    {
      to:"ongoing",
      from:"01-10-2021",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum"
    },
    {
      to:"ongoing",
      from:"01-10-2021",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum"
    },
    {
      to:"ongoing",
      from:"01-10-2021",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"Lorem Ipsum Samplrum Norum donar durum"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
