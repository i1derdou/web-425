import { Component } from '@angular/core';
@Component({
 selector: 'app-home',
 standalone: true,
 imports: [],
 template: `
 <div class="row pattern">
    <section class="features" id="features">
      <div class="container">
        <div class="row">
          <h2>Now we've come full circle</h2>
          <p class="section-description"> A smokescreen covered their continuous blinks towards the outskirts of the great kingdom, until the cathedral was the only thing clearly visible. Along the way, they could sense the great shadow of a Dragon, watching their every step. Then, the voices of survivors seeking revenge towards the witch echoed through the destroyed cathedral halls. Others were tending to their wounded, others were trying to collect the Enlightened's burning husk from the great funeral pyre, whilst the archbishop was chanting blessings, leading the flock of peasants as if they were warriors, preparing to battle the mighty dragon... </p>
        </div>
        <div class="row items-container bottom-wrapper">
          <p>&nbsp; <br>&nbsp; </p>
        </div>
        <div class="row">
          <h2>Build your Hero</h2>
          <article id="features-item" class="col-sm-6 col-md-3 box features-item thumbnail-100" data-toggle="modal" data-target="#shop-modal">
            <img class="features-img" src="assets/img/character-1.jpg" alt="Aleister Hero Character" data-strength="9" data-dexterity="7" data-agility="7" data-willpower="8" data-intelligence="4">
            <span id="item-name-caption" class="item-name-caption hidden-xs"> Aleister </span>
            <h3>Aleister</h3>
            <p class="features-p"> Aleister, the former demonlord, is always looking at others bearing a malefic grin upon his twisted visage, harnessing all the power he can muster as he directs bolts of pure chaos towards his foes. </p>
          </article>
          <article class="col-sm-6 col-md-3 box features-item thumbnail-100" data-toggle="modal" data-target="#shop-modal">
            <img class="features-img" src="assets/img/character-2.jpg" alt="Hecate Hero Character" data-strength="4" data-dexterity="7" data-agility="7" data-willpower="9" data-intelligence="8">
            <span id="item-name-caption" class="item-name-caption hidden-xs"> Hecate </span>
            <h3>Hecate</h3>
            <p class="features-p"> The only place Hecate feels safe is total Darkness, where she envelopes herself and thrives, until it totally consumes her existence. Until that strange familiar odor which vanished, reappears and stabs you - in the Dark. </p>
          </article>
          <div class="clearfix visible-sm-block"></div>
          <article class="col-sm-6 col-md-3 box features-item thumbnail-100" data-toggle="modal" data-target="#shop-modal">
            <img class="features-img" src="assets/img/character-3.jpg" alt="Theregar Hero Character" data-strength="7" data-dexterity="9" data-agility="9" data-willpower="4" data-intelligence="6">
            <span id="item-name-caption" class="item-name-caption hidden-xs"> Theregar </span>
            <h3>Theregar</h3>
            <p class="features-p"> Theregar's smile looks intimidating as it is, yet is amplified by the fel green hue of the enchantments he is preparing: As he deflects his attackers, his foes are enlightened by his immense control of the Shadows... </p>
          </article>
          <article class="col-sm-6 col-md-3 box features-item thumbnail-100" data-toggle="modal" data-target="#shop-modal">
            <img class="features-img" src="assets/img/character-4.jpg" alt="Roth Hero Character" data-strength="5" data-dexterity="6" data-agility="6" data-willpower="9" data-intelligence="9">
            <span id="item-name-caption" class="item-name-caption hidden-xs"> Roth </span>
            <h3>Roth</h3>
            <p class="features-p"> Void claimed all in the Halls of Reflection as Roth rised from the Stone, his voice echoing again in the sultry darkness. His enemies fallen, their eyesight blurred, their powers escaping their body as he consumed their souls... </p>
          </article>
        </div>
      </div>
    </section>
</div>
 `,
 styles: []
})
export class HomeComponent {
}
