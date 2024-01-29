import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HEROES } from './mock-heroes';
 

@Component({
  selector: 'app-filter',
  template: `
    <section>
      <h2>Hero List Group</h2>

      <app-hero-list-group [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-group>
    </section>
  ` 
 
})
export class HerosGroupComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
