import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  template: `
    <header>
      <a href="/" id="logo">
        <img class="logo" src="/Assinatura_2_p.png" alt="signature" />
      </a>
      <nav class="navbar-wrapper">
        <ul class="navbar">
          <li class="nav-items">TRABALHOS PESSOAIS</li>
          <li class="nav-items">PERSONAGENS</li>
          <li class="nav-items">SKETCHBOOK</li>
          <li class="nav-items">SOBRE MIM</li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
