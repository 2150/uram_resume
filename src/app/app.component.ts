import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uram_resume';

  scrollToElement($el): void {
    $el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    console.log('scrolled')
  }
}
