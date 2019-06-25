import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public selectedHero: Hero;

  public heroes: Hero[];

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {
   }

   private getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  ngOnInit() {
    this.getHeroes();
}


}