import { Component } from '@angular/core';
import { NewsComponent } from '@utils/news/news.component';

@Component({
  selector: 'app-section-info',
  standalone: true,
  imports: [NewsComponent],
  templateUrl: './section-info.component.html',
  styleUrls: ['../../app.component.scss', '../section-info/section-info.component.scss']
})
export class SectionInfoComponent {

}
