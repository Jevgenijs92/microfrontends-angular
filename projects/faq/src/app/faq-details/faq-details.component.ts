import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqDetailsComponent {
  constructor(public route: ActivatedRoute) {}

  heading$ = this.route.paramMap.pipe(
    map(params => params.get('id')));
}
