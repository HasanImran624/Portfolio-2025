import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  external: string;
  image: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Lexcheck',
      description: 'Contract review software revolutionize deal-making, optimize processes and facilitate smoother negotiations. Level up your negotiations with the most secure and advanced legal technology.',
      longDescription: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['.NET Core', 'Microservices', 'MailGun', 'Entlr','Parsing Engine','Angular','RabbitMQ','AWS Cloud','Docker','MySQL','Docker','CI/CD Pipelines','GitHub Actions'],
      github: 'https://github.com/HasanImran624',
      external: 'https://www.lexcheck.com/',
      image: 'Lexcheck.png',
      featured: true
    },
    {
      title: 'Netaq Vision2030',
      description: 'Designed and developed a custom municipal project management system for Riyadh Municipality, streamlining infrastructure project tracking, approvals, and auditing.The system functions as a tailored ERP, supporting end-to-end workflows, role-based access, and real-time reporting.',
      longDescription: 'A web application for visualizing personalized Spotify data built with React, Express, and the Spotify API. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['ASP.NET', 'C#', 'IIS Server deployments', 'Keyclock Integration', 'Razor','3rd Party Integrations'],
      github: '',
      external: '',
      image: 'Netaq.png',
      featured: true
    },
    {
      title: 'CStoreSwiftec ',
      description: 'web application for managing retail store operations including inventory management, pricing, sales reporting, user permissions, and store device configuration. Built with modern technologies including .NETCORE CQRS Pattren, Angular Material, DevExpress reporting, and comprehensive features for master data management, transaction tracking, and real-time sales analytics.',
      longDescription: 'A web application for tracking the spread of COVID-19 with data visualization and real-time updates. Built with React and Chart.js to display global statistics, country-specific data, and trends over time.',
      tech: ['.NET CORE', 'Web API', 'CQRS', '  Microservices', 'RabbitMQ','Angular','DevExpress Reporting','SQL Server'],
      github: '',
      external: '',
      image: 'CStoreSwiftec.png',
      featured: true
    },
    {
      title: 'Anyhand', 
      description: 'Anyhandy aims to streamline the process of connecting users with service providers, offering transparent pricing, expert professionals, fully equipped services, and a quality assurance guarantee. The outcomes of this productinclude efficient service delivery, enhanced user experience, and a solution to the chalenge of easily accessing reliable service providers for various needs.',
      longDescription: 'A web application for tracking the spread of COVID-19 with data visualization and real-time updates. Built with React and Chart.js to display global statistics, country-specific data, and trends over time.',
      tech: ['.NET CORE', 'Web API', 'JWT', 'Angular', 'AWS Services','Nginx','MYSQL'],
      github: 'https://github.com/HasanImran624/anyhandy-API',
      external: 'https://anyhand-ui-dmlw.vercel.app/',
      image: 'Anyhand.png',
      featured: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
