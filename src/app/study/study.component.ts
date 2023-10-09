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
      degreeName:"Masters in Web Engineering",
      description:"I have recently embarked on a Master's program in Web Engineering, commencing in October 2023. This transition reflects my evolving interests and career goals, aligning with my passion for web technologies and software development. I look forward to embracing this exciting journey of acquiring specialized knowledge in web engineering.",
      focus: false,
      from: "2023 Oct",
      to: "Present",
    },
    {
      date:"2021 - 2023 Sep",
      schoolName:"TU Chemnitz",
      degreeName:"Masters in Automotive Software Engineering",
      description:"While I began my Master's in Automotive Software Engineering with a genuine interest in the field, I later made the decision to explore new opportunities and redirect my career path. Due to unforeseen circumstances, including visa delays, I took the time to assess my goals and interests. As of October 2023, I have transitioned to a Web Engineering course to align my studies with my evolving interests and career aspirations.",
      focus: false,
      from: "2021 Oct",
      to: "2023 Sep",
    },
    {
      date:"2021-2017",
      schoolName:"Southeast University",
      degreeName:"BSc in Computer Science & Engineering",
      description:"My BSc in Computer Science and Engineering from Southeast University was a transformative journey that not only equipped me with a solid technical foundation but also nurtured my passion for competitive programming. The university's rigorous curriculum and supportive environment prepared and influenced me profoundly, shaping me into the software engineer I am today.",
      focus: false,
      from: "2013",
      to: "2017",
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
