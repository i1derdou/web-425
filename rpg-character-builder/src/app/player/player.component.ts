import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  template: `
    <div class="row pattern">
      <section class="features" id="features">
        <div class="container">
          <div class="row">
            <h2>Player</h2>
            <p class="section-description"></p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: ``
})
export class PlayerComponent {

}
