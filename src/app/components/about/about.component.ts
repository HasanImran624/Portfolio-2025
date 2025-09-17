import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
skills = [
  // Backend & Architecture
  "C#",
  ".NET Core",
  "ASP.NET Web API",
  "Microservices",
  "Event-Driven Architecture",
  "Domain-Driven Design (DDD)",
  "Clean Architecture",
  "CQRS",
  "OOP",
  "SOLID Principles",
  "Design Patterns",

  // Frontend
  "Angular",
  "Backbone.js",
  "JavaScript",
  "Razor",
  "HTML",
  "CSS",
  "Bootstrap",

  // API Security
  "JWT",
  "Keycloak",
  "OAuth2",
  "OpenID Connect",
  "RBAC",

  // Cloud & Infrastructure
  "AWS Lambda",
  "Amazon SQS",
  "Amazon DynamoDB",
  "Amazon S3",
  "Amazon RDS",
  "Amazon CloudWatch",
  "Amazon CloudFront",
  "Docker",

  // Messaging & Distributed Systems
  "RabbitMQ",

  // Databases
  "SQL Server",
  "MySQL",
  "Redis",

  // Testing & CI/CD
  "xUnit",
  "Integration Testing",
  "GitHub Actions",
  "CI/CD Pipelines",

  // Observability & Monitoring
  "OpenTelemetry",
  "Serilog",
  "Application Insights",


];

  constructor() { }

  ngOnInit(): void {
  }
}
