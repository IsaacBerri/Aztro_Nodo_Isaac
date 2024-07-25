import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input({ required: true }) platform!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string;
}
