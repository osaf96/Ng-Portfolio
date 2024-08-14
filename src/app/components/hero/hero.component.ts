import { Component, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  
  constructor(private elementRef: ElementRef) {}
  
  scrollDown() {
    const scrollTarget = this.elementRef.nativeElement.ownerDocument.documentElement.clientHeight * 1; // 100%
    const scrollStep = scrollTarget / 35;
    let scrollCurrent = this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop;

    const animateScroll = () => {
      scrollCurrent += scrollStep;
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = scrollCurrent;
      
      if (scrollCurrent < scrollTarget) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  }
}
