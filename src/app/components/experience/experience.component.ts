import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  selectedCompany = 'Takamul Technology';
  
  workExperiences: WorkExperience[] = [
    {
      company: 'Takamul Technology',
      position: 'Senior Software Engineer',
      duration: 'Jan 2026 – Present',
      location: 'Riyadh, Saudi Arabia',
      description: 'Building a backend integration platform for a SDAIA digital-twin (DCIM) system',
      achievements: [
        'Built a backend integration platform for a SDAIA digital-twin (DCIM) system that ingests multi-vendor data into a unified asset hierarchy for UI and 3D visualization',
        'Designed typed vendor adapters (Elasticsearch, DCE, ITA, CMDB, file) with a shared discovery/telemetry pipeline for create/update/delete into the domain model',
        'Delivered a YAML/schema-driven configuration layer so connection, identity, field mapping, and parent-placement rules can change without redeploying adapter code',
        'Implemented config-validated field mapping and value-transform pipelines that normalize heterogeneous JSON into canonical asset parameters',
        'Built an on-demand Elasticsearch live-query engine for dashboard/KPI reads outside the asset sync path, with paging, filters, and parameterized query DSL',
        'Owned Minimal API endpoints and run orchestration for discovery/telemetry jobs, connection tests, and live queries consumed by the digital-twin UI',
        'Separated protocol adapters (code) from instance integration definitions (YAML) to scale new customer mappings while keeping vendor-specific fetch logic maintainable'
      ],
      technologies: ['.NET 10 Minimal APIs', 'EF Core', 'SQL Server', 'MongoDB', 'React', 'TypeScript', 'YAML', 'Elasticsearch']
    },
    {
      company: 'Jodayn',
      position: 'Senior Software Engineer',
      duration: '2024 – 2025',
      location: 'Riyadh, Saudi Arabia',
      description: 'Deployed at Amanah Riyadh Municipality – Ministry',
      achievements: [
        'Designed and implemented secure backend services using C#, .NET Core, and AWS (Lambda, RDS, S3)',
        'Directed backend and UI modernization initiatives, improving user experience by 40% and system responsiveness by 50%',
        'Strengthened system security with Keycloak, OpenID Connect and JWT Token',
        'Acted as a technical escalation point, resolving 20+ critical blockers and ensuring uninterrupted delivery',
        'Mentored junior developers and led 50+ code reviews, ensuring adherence to performance, security, and best practices',
        'Managed deployments on IIS, achieving 99.9% uptime and reducing deployment errors by 70%',
        'Collaborated with cross-functional teams (Frontend, DevOps, QA) to align on architecture and release planning',
        'Delivered new Inspection module that automated manual processes, improving operational efficiency by 45%'
      ],
      technologies: ['C#', '.NET Core', 'AWS Lambda', 'AWS RDS', 'AWS S3', 'Keycloak', 'OpenID Connect', 'JWT', 'IIS', 'Angular', 'Microservices']
    },
    {
      company: 'Rolustech',
      position: 'Senior Software Engineer',
      duration: '2019 – 2024',
      location: 'Lahore, Pakistan',
      description: 'Full-stack development and system architecture',
      achievements: [
        'Developed and maintained backend systems using C#, .NET Core, ASP.NET, and SQL Server/MySQL',
        'Migrated 420+ APIs from ASP.NET to .NET Core, improving scalability by 30%',
        'Implemented microservices architecture and event-driven messaging with RabbitMQ and AWS SQS/SNS',
        'Built Email Service using MailGun for automated notifications and communications',
        'Built Document Parsing Engine using Antlr and OpenXML SDK for automated document processing',
        'Automated CI/CD pipelines using GitHub Actions, Docker, and Kubernetes, reducing release downtime',
        'Integrated third-party APIs and cloud services AWS (Lambda, RDS, S3, Cognito, SNS, CloudWatch)',
        'Contributed to system monitoring and logging with OpenTelemetry with Grafana CloudWatch, ensuring production stability',
        'Provided technical leadership in project delivery, including requirement gathering, architecture alignment, and system design'
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET', 'SQL Server', 'MySQL', 'RabbitMQ', 'MailGun', 'Antlr', 'OpenXML SDK', 'GitHub Actions', 'Docker', 'CI/CD', 'OpenTelemetry', 'SignalR', 'AWS Lambda', 'AWS RDS', 'AWS S3', 'AWS Cognito', 'AWS SNS']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCompany(company: string): void {
    this.selectedCompany = company;
  }

  getSelectedExperience(): WorkExperience | undefined {
    return this.workExperiences.find(exp => exp.company === this.selectedCompany);
  }

  getCompanyNames(): string[] {
    return this.workExperiences.map(exp => exp.company);
  }
}
