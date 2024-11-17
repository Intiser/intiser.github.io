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
      label: "TU Chemnitz",
      title: "Student Assistant",
      date: "2023 Jul - 2024 Sep",
      from: "2023 Jul",
      to: "2024 Sep",
      //description: "Since June 2022, I have been an integral part of a large-scale project where I have played a pivotal role in maintaining, continuously enhancing, and seamlessly integrating new features into the project. This ongoing commitment has allowed me to deeply understand the project's intricacies and contribute effectively to its evolution. Throughout this journey, I've not only demonstrated proficiency in technologies such as Angular, Spring Boot Java, and Jasper Reports but have also shown my adaptability in working on a dynamic, long-term project. It's been an enriching experience contributing to the success and growth of this project.",
      description: "Engaged in web development tasks as a student assistant at the University.",
      tab: ["PHP","CSS","HTML", "MySQL"],
      focus: false
    },
    {
      label: "Herton GMBH",
      title: "Software Engineer Fullstack",
      date: "2022 - 2024 Sep",
      from: "2022",
      to: "2024 Sep",
      //description: "Since June 2022, I have been an integral part of a large-scale project where I have played a pivotal role in maintaining, continuously enhancing, and seamlessly integrating new features into the project. This ongoing commitment has allowed me to deeply understand the project's intricacies and contribute effectively to its evolution. Throughout this journey, I've not only demonstrated proficiency in technologies such as Angular, Spring Boot Java, and Jasper Reports but have also shown my adaptability in working on a dynamic, long-term project. It's been an enriching experience contributing to the success and growth of this project.",
      description: "Since June 2022 to February 2024, I've been actively involved in a large-scale project, taking on a key role in maintenance, feature enhancement, and seamless integration. This journey has showcased my proficiency in Angular, Spring Boot Java, and Jasper Reports, highlighting my adaptability in a dynamic, long-term project environment. I'm proud to have contributed to the project's success and growth.",
      tab: ["Typescript","Angular","Java", "SpringBoot", "MS SQL"],
      focus: false
    },
    {
      label: "Freelancing",
      title: "Software Engineer",
      date: "2019 - 2021",
      from: "2019",
      to: "2021",
      //description: "During this time, I ventured into freelancing and specialized in Android application development. Notably, I worked on the creation of video and image editing applications, catering to the growing demand for multimedia content tools. Additionally, I contributed to the development of eCommerce Android applications, focusing on enhancing user experiences, implementing secure payment gateways, and optimizing performance. These experiences allowed me to refine my expertise in Android app development, problem-solving, and client collaboration, reinforcing my commitment to delivering high-quality solutions while navigating evolving career circumstances.",
      description: "During this period, I ventured into freelancing, specializing in Android app development. I crafted video and image editing apps to meet the demand for multimedia tools, and I also enriched eCommerce Android applications by enhancing user experiences, implementing secure payment systems, and optimizing performance. These experiences honed my expertise in Android app development, problem-solving, and client collaboration, reaffirming my dedication to delivering top-notch solutions while adapting to evolving career circumstances.",
      tab: ["Android","Java","Kotlin", "Firebase", "SQL"],
      focus: false
    },
    {
      label: "OushodSheba",
      title: "Software Engineer",
      date: "2018 - present",
      from: "2019 Dec",
      to: "2020 Jun",
      //description: "My tenure at the medicine eCommerce company, which involved Android application development, design input, critical calculations in the backend, and project management, was regrettably interrupted due to unforeseen challenges stemming from the COVID-19 pandemic. To prioritize my health and well-being in the face of the pandemic's uncertainty and the company's office requirements during that period, I made the difficult decision to resign. Despite this unexpected departure, I remain committed to my profession and eagerly anticipate returning to contribute my skills and expertise to meaningful projects as circumstances evolve.",
      description: "My tenure at the medicine eCommerce company, involving Android app development, design input, backend calculations, and project management, was interrupted due to unforeseen COVID-19 challenges. Prioritizing my well-being amid pandemic uncertainties and office requirements, I resigned. I look forward to returning to contribute my skills to meaningful projects as circumstances evolve.",
      tab: ["Android","Java", "Firebase", "SQL", "SpringBoot"],
      focus: false
    },
    {
      label: "Southeast University",
      title: "Part-time Lecturer",
      date: "2018 - present",
      from: "2018 Oct",
      to: "2019 Sep",
      //description: "During my tenure as a part-time lecturer at Southeast University, I had the privilege of instructing courses in Data Structure and Smart Device Application Development. In this role, I shared my knowledge and expertise with students, fostering their understanding of these critical subjects. This experience not only deepened my appreciation for education but also reinforced my commitment to contributing to the development of future professionals in the field.",
      description: "During my tenure as a part-time lecturer at Southeast University, I had the privilege of instructing courses in Data Structure and Smart Device Application Development. In this role, I shared my knowledge and expertise with students, fostering their understanding of these critical subjects. This experience not only deepened my appreciation for education but also reinforced my commitment to contributing to the development of future professionals in the field.",
      tab: ["Data Structure","Algorithm","Android", "Java"],
      focus: false
    },
    {
      label: "Kite Games Studio",
      title: "Junior Software Engineer",
      date: "2017 - 2018",
      from: "2017 Dec",
      to: "2018 Dec",
      //description: "During my tenure at Kite Games Studio, I embarked on my professional journey in Android application development. My responsibilities primarily centered around the development of Android applications specializing in image and video editing. This role demanded a diverse skill set, as I frequently worked with OpenGL shaders to create captivating visual effects, utilized ffmpeg for efficient media file editing, and customized native Android video players to enhance user experiences. These experiences not only solidified my expertise in Android app development but also instilled in me a profound appreciation for crafting multimedia applications that engage and delight users.",
      description: "At Kite Games Studio, I started my journey in Android app development, focusing on image and video editing apps. This role required diverse skills, including OpenGL shader work for visual effects, ffmpeg for media editing, and customizing Android video players for enhanced user experiences. These experiences solidified my expertise in Android app development and fostered a deep appreciation for crafting engaging multimedia applications.",
      tab: ["Android","Java", "Firebase", "OpenGL", "FFmpeg"],
      focus: false
    },
    // {
    //   label: "OushodSheba",
    //   title: "Software Engineer",
    //   date: "30.11.2019 - 29.06.2023",
    //   description: "description",
    // },
    // {
    //   label: "Southeast University",
    //   title: "Lecturer(Part-time)",
    //   date: "31.08.2018 - 30.08.2019",
    //   description: "description",
    // },
    // {
    //   label: "Kite Games Studio",
    //   title: "Software Engineer",
    //   date: "08.12.2017 - 29.11.2018",
    //   description: "description",
    // },
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectTab(this.tabsList[0])
  }

  selectTab(tab:Tab){
    this.selectedTab = tab;
  }

  mouseOver(item:any){
    item.focus = true;
  }

  mouseOut(item:any){
    item.focus = false;
  }

}
