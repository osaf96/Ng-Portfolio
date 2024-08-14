import { CommonModule } from "@angular/common";
import { Component, ElementRef } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIcon, MatCommonModule, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log("Menu state:", this.menuOpen); // Check if the state is changing
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
