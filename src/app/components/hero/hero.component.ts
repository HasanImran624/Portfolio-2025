import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  name = 'Hasan Imran';
  title = 'Software Developer';
  subtitle = 'I build exceptional digital experiences';
  description = 'I\'m a Software developer with 6 yoe who lives and breathes code, 16-hour days are normal when the mission demands it. I specialize in fixing broken systems, shipping fast, and turning impossible into shipped and working.';
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/HasanImran624', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hasan-imran-133868185/', icon: 'linkedin' },
    { name: 'Youtube', url: 'https://www.youtube.com/watch?v=2Ji_ADeeWCQ', icon: 'youtube' },
    { name: 'Email', url: 'mailto:hasanimran4095009&#64;gmail.com', icon: 'email' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
