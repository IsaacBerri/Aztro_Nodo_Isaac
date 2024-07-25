import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionGamesComponent } from '@components/section-games/section-games.component';
import { SectionInfoComponent } from '@components/section-info/section-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionGamesComponent, SectionInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Reto_8_Perfil_de_videojuegos';
}
