import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: true }) imgSrc: string = "";
  @Input({ required: true }) projectTitle: string = "";
  @Input() projectDescription: string = "";
  @Input() tags: string[] = [];
  @Input() liveUrl?: string;

  openLive(event: MouseEvent): void {
    event.stopPropagation();
    if (this.liveUrl) {
      window.open(this.liveUrl, "_blank");
    }
  }
}
