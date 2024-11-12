import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, RouterLink],
 template: `
<div class="container-fluid">
  <div class="row">
    <!-- START: Header -->
    <header id="home">
      <!-- START: Main Navigation -->
      <nav class="navbar navbar-inverse navbar-custom navbar-fixed-top">
        <div class="container">
          <div class="navbar navbar-header">
            <a class="navbar-brand navbar-logo" routerLink="/"></a>
            <button type="button" class="navbar-toggle custom-toggle-btn" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
              <span class="sr-only"> Toggle navigation </span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="nav navbar-nav navbar-right">
            <li class="plain-link">
                <a routerLink="/">Home</a>
              </li>
              <li class="plain-link">
                <a routerLink="/players">Players</a>
              </li>
              <li class="plain-link">
                <a routerLink="create-character">Create Character</a>
              </li>
              <li class="plain-link">
                <a routerLink="create-guild">Create Guild</a>
              </li>
              <li class="plain-link">
                <a routerLink="character-faction">Faction</a>
              </li>
              <li class="plain-link">
                <a routerLink="signin">Sign-In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>
        <img onload="this.style.opacity='1';" class="big-logo" src="assets/img/Dragonic-Final.png" alt="Dragonic big logo">
      </h1>
    </header>
  </div>
  <!-- Divider -->
  <div class="Divider">
    <hr class="Divider-rule">
  </div>
  <!-- Content -->
  <router-outlet />
  <!-- Divider -->
  <div class="Divider">
    <hr class="Divider-rule">
  </div>
  <!-- START: Footer -->
  <div class="row pattern-dark">
    <footer class="container footer">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <nav class="footer-nav">
            <ul>
              <li>
                <a routerLink="/">Home</a>
              </li>
              <li>
                <a routerLink="players">Players</a>
              </li>
              <li>
                <a routerLink="create-character">Create Character</a>
              </li>
              <li>
                <a routerLink="create-guild">Create Guild</a>
              </li>
              <li>
                <a routerLink="character-faction">Faction</a>
              </li>
              <li>
                <a routerLink="signin">Sign-In</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xs-12 col-sm-6">
          <nav class="social-nav">
            <a href="#">
              <span class="ion-social-facebook"></span>
            </a>
            <a href="#">
              <span class="ion-social-twitter"></span>
            </a>
            <a href="#">
              <span class="ion-social-youtube"></span>
            </a>
            <a href="#">
              <span class="ion-social-instagram"></span>
            </a>
          </nav>
        </div>
      </div>
      <div class="row">
        <p class="copyright">Copyright &copy; 2024</p>
      </div>
    </footer>
  </div>
  <!-- END: Footer -->
</div>
 `,
 styles: [
 `
 `
 ]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
