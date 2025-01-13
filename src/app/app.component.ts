import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="content">
      <app-header />
      <main>
        <router-outlet />
      </main>
    </div>
    <app-footer />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PortifolioGUI';
}
