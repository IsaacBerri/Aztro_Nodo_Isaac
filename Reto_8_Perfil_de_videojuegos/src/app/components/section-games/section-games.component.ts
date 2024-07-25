import { Component } from '@angular/core';
import { ButtonComponent } from '@utils/button/button.component';

@Component({
  selector: 'app-section-games',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './section-games.component.html',
  styleUrls: ['../../app.component.scss', '../section-games/section-games.component.scss']
})
export class SectionGamesComponent {

}
