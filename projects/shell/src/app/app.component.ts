import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(@Inject('CUSTOM_NAVIGATION_NODES') public navigationNodes: { href: string; label: string; }[]) {}

}
