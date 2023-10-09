import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //description = "Hi, my name is Syed Intiser Ahsan. I build things for the web I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm doing my masters on Automotive Software Engineering at TU Chemnitz."
  description1 = "My journey into the world of software development began in 2014, under the guidance of the renowned competitive programming luminary, Shahriar Manzoor. I quickly discovered my passion for problem-solving and analysis—a passion that has driven my career and ambitions ever since."
  description2 = "My programming odyssey led me to dive headfirst into competitive programming, competing in 13 National level Inter-university contests and challenging myself in the Dhaka Regional ICPC three times. Along the way, I found immense satisfaction in applying my problem-solving skills to real-world challenges, with a deep-rooted desire to contribute to society and the social wellbeing of others."
  description3 = "Throughout my career, I've had the pleasure of collaborating with startups, harnessing my expertise to help them thrive and make a positive impact. I believe in the power of innovation to drive change and am committed to using my skills for the greater good."
  description4 = "Beyond the world of code, I find joy in playing Valorant and other FPS games during my free time. My love for sports knows no bounds, and I'm an avid follower of Formula 1, Cricket, and Football. This passion for sports fuels my competitive spirit and my dedication to excellence in all that I do."
  

  constructor() { }

  ngOnInit(): void {
  }

}
