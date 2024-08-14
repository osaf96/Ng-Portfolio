import { Component } from "@angular/core";
import { CardComponent } from "../shared/card/card.component";
import { Project } from "../../model/project.model";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imgSrc: "assets/imgs/meddy.png",
      projectTitle: "Meddy AI",
      projectDescription: `I was part of a team that created Meddy, a medical assistant app using Flutter, React, and Node.js. We integrated Gemini and GPT models to bridge communication gaps for non-English speakers and tech-challenged patients. Key features included voice-controlled interactions, real-time translation, and personalized health insights. I focused on developing the real-time translation and medical Q&A features, enhancing user experience with advanced AI integration. This project showcased my expertise in full-stack development and AI integration, and demonstrated effective team collaboration.`,
      tags: ["React", "TS", "CSS", "Node.js", "Gemini", "PostgreSQL"],
      liveUrl: "https://trymeddy.com/",
    },

    {
      imgSrc: "assets/imgs/calendar.png",
      projectTitle: "Calendar App",
      projectDescription: `I built a digital calendar app from the ground up using Angular and Angular Material, without relying on any external libraries. This project allowed me to implement features for setting and managing events on specific dates.`,
      tags: ["Angular", "TS", "SCSS", "Angular Material"],
      liveUrl: "https://calendar-app7.netlify.app/",
    },

    {
      imgSrc: "assets/imgs/new-portfolio.png",
      projectTitle: "New Portfolio",
      projectDescription: `I created a new portfolio project using Angular, TypeScript, and SCSS, incorporating Tailwind CSS for streamlined styling. This project showcases my skills in modern frontend development practices and features a responsive design for an enhanced user experience.`,
      tags: ["Angular", "TS", "CSS", "tailwindcss"],
      liveUrl: "https://alihaider7.netlify.app/",
    },
    {
      imgSrc: "assets/imgs/sumIt.png",
      projectTitle: "SumIt",
      projectDescription: `Fed up with disorganized online reading, I created Sumit a web extension crafted with HTML, CSS, and JavaScript. Sumit helps me capture and organize notes, turning my online reading chaos into clarity. This project is a personal testament to solving real challenges with tailored tech solutions.`,
      tags: ["HTML", "JS", "CSS"],
    },

    {
      imgSrc: "assets/imgs/foodApp.png",
      projectTitle: "FOOD Store",
      projectDescription: `I created a food ordering app inspired by Food Panda using Angular. This dynamic and responsive app features a comprehensive product catalog with sorting and filtering options, secure user authentication for login and registration, and advanced styling with SCSS. This project was a great way for me to enhance my skills in building complex, user-friendly applications.`,
      tags: ["Angular", "TS", "SCSS", "Node.js", "MongoDB", "Mongoose"],
    },
  ];

  openLive(url: string): void {
    window.open(url, "_blank");
  }
}
