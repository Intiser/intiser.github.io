import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //description = "Hi, my name is Syed Intiser Ahsan. I build things for the web I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm doing my masters on Automotive Software Engineering at TU Chemnitz."
  description1 = "My journey into software development began in 2014, driven by a deep fascination with problem-solving and analytical thinking. Immersing myself in competitive programming, I participated in 13 National Inter-university contests and competed in three Dhaka Regional ICPC events. These experiences refined my technical skills and instilled in me a strong sense of perseverance and adaptability."
  description2 = "Beyond competitions, I’ve found great fulfillment in applying my expertise to practical challenges, collaborating with startups, and contributing to meaningful projects. I am motivated by a steadfast belief in technology’s potential to drive innovation and create lasting positive change, and I strive to align my work with this vision."
  //description3 = "Throughout my career, I've had the pleasure of collaborating with startups, harnessing my expertise to help them thrive and make a positive impact. I believe in the power of innovation to drive change and am committed to using my skills for the greater good."
  //description4 = "Beyond the world of code, I find joy in playing Valorant and other FPS games during my free time. My love for sports knows no bounds, and I'm an avid follower of Formula 1, Cricket, and Football. This passion for sports fuels my competitive spirit and my dedication to excellence in all that I do."
  

  constructor() { }

  ngOnInit(): void {
  }

}
